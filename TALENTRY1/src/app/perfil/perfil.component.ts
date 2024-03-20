import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm!: FormGroup;

  usuario = {
    nombre: 'Juan Pérez',
    dni: '12345678X',
    email: 'juan.perez@example.com',
    contrasena: 'contraseñaSuperSecreta',
    telefono: '600123456'
  };

  ngOnInit(): void {
    this.perfilForm = new FormGroup({
      nombre: new FormControl({value: this.usuario.nombre, disabled: true}),
      dni: new FormControl({value: this.usuario.dni, disabled: true}),
      email: new FormControl({value: this.usuario.email, disabled: true}),
      contrasena: new FormControl({value: this.usuario.contrasena, disabled: true}),
      telefono: new FormControl({value: this.usuario.telefono, disabled: true})
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
