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
    nombre: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });
  usuario: User | undefined;
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
          phone: data[0].phone
        };
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

  habilitarEdicion(campo: string): void {
    const control = this.perfilForm.get(campo);
    if (control) {
      control.enable();
    }
  }

  deshabilitarCampos(): void {
    for (const controlName in this.perfilForm.controls) {
      if (this.perfilForm.controls.hasOwnProperty(controlName)) {
        this.perfilForm.controls[controlName].disable();
      }
    }
  }

  navegarAlHistorial(): void {
    this.router.navigate(['/historial']);
  }

  togglePermisosEmpresasEditable(): void {
    this.permisosEmpresasEditable = !this.permisosEmpresasEditable;
  }


  /*cargarDatosUsuario() {
    // Aquí normalmente se llamaría a un servicio para obtener los datos del usuario
    this.perfilForm.patchValue({
      nombre: this.usuario.nombre,
      dni: this.usuario.dni,
      email: this.usuario.email,
      // No se recomienda cargar contraseñas en formularios
      telefono: this.usuario.telefono
    });
  }*/

  // Implementa una función para manejar la actualización de los datos
  onSubmit(): void {
    if (this.perfilForm.valid) {
      console.log('Datos del formulario:', this.perfilForm.value);
      // Aquí iría la lógica para actualizar los datos del usuario
      this.deshabilitarCampos();
    }
  }
}
