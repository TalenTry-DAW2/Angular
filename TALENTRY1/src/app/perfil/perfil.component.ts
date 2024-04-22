import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../../models/User";
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  permisosEmpresas: boolean = false;
  permisosEmpresasEditable: boolean = false;
  perfilForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    dni: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });
  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]),
    passwordRepeat: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]),
  });
  usuario: User | undefined;
  ToggleContrasena: boolean = false;
  ToggleURLImagen: boolean = false;
  URLImagen: string = "";
  inputType: string = "password";
  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data: any) => {
        this.usuario = {
          DNI: data[0].DNI,
          UserID: data[0].UserID,
          name: data[0].name,
          email: data[0].email,
          phone: data[0].phone,
          photo: data[0].photo
        };
        this.permisosEmpresas = data[0].visibility;
        this.initializeForm();
      },
      (error: string | undefined) => {
        throw new Error(error);
      });
  }

  initializeForm(): void {
    this.perfilForm = new FormGroup({
      nombre: new FormControl({ value: this.usuario?.name, disabled: true }),
      dni: new FormControl({ value: this.usuario?.DNI, disabled: true }),
      email: new FormControl({ value: this.usuario?.email, disabled: true }),
      telefono: new FormControl({ value: this.usuario?.phone, disabled: true }),
    });
  }

  mostrarOculto(dni: string): void {
    this.inputType = (this.inputType === 'text') ? 'password' : 'text';
  }

  habilitarEdicion(campo: string): void {
    const control = this.perfilForm.get(campo);
    if (control) {
      if (control.enabled) {
        control.disable();
      } else {
        control.enable();
      }
    }
  }

  navegarAlHistorial(): void {
    this.router.navigate(['/historial']);
  }

  navegarAPermisoEmpresa(): void {
    this.router.navigate(['/permiso-empresa']);
  }

  togglePermisosEmpresasEditable(): void {
    this.userService.EditarPrivacidad().subscribe(
      (data: any) => {
        if (data) {
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      },
      (error: any) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  // Implementa una función para manejar la actualización de los datos
  EditarUsuario(): void {
    if (this.perfilForm.valid) {
      this.userService.EditarUsuario(this.perfilForm.value).subscribe(
        (data) => {
          if (data) {
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }
        },
        (error) => {
          console.error('Error al actualizar el usuario', error);
        }
      );
      this.deshabilitarCampos();
    }
  }

  deshabilitarCampos(): void {
    for (const controlName in this.perfilForm.controls) {
      if (this.perfilForm.controls.hasOwnProperty(controlName)) {
        this.perfilForm.controls[controlName].disable();
      }
    }
  }

  toggleContrasena() {
    this.ToggleContrasena = !this.ToggleContrasena;
  }

  toggleImagen() {
    this.ToggleURLImagen = !this.ToggleURLImagen;
  }

  cambiarContrasena() {
    if (this.passwordForm.valid) {
      if (this.passwordForm.value.password !== this.passwordForm.value.passwordRepeat) {
        this.passwordForm.get('passwordRepeat')?.setErrors({ passwordMismatch: true });
        return;
      }

      this.userService.EditarUsuario(this.passwordForm.value).subscribe(
        (data) => {
          if (data) {
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }
        },
        (error) => {
          console.error('Error al actualizar el usuario', error);
        }
      );
    }
  }

  cambiarImagenPerfil() {
    const formulario = {
      photo: `${this.URLImagen}`
    };
    this.userService.EditarUsuario(formulario).subscribe(
      (data) => {
        if (data) {
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }
}
