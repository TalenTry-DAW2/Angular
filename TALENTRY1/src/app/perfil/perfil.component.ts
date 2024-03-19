import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm!: FormGroup;

  // Simula un objeto de usuario que sería proporcionado por un servicio de autenticación.
  usuario = {
    nombre: 'Juan Pérez',
    dni: '12345678X',
    email: 'juan.perez@example.com',
    contrasena: 'contraseñaSuperSecreta', // Ten cuidado con las contraseñas en el frontend
    telefono: '600123456'
  };

  ngOnInit(): void {
    this.perfilForm = new FormGroup({
      nombre: new FormControl(''),
      dni: new FormControl(''),
      email: new FormControl(''),
      contrasena: new FormControl(''), // Considera la seguridad de cómo manejas las contraseñas
      telefono: new FormControl('')
    });

    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    // Aquí normalmente se llamaría a un servicio para obtener los datos del usuario
    this.perfilForm.patchValue({
      nombre: this.usuario.nombre,
      dni: this.usuario.dni,
      email: this.usuario.email,
      // No se recomienda cargar contraseñas en formularios
      telefono: this.usuario.telefono
    });
  }

  // Implementa una función para manejar la actualización de los datos
  onSubmit() {
    console.log('Datos del formulario:', this.perfilForm.value);
    // Aquí iría la lógica para actualizar los datos del usuario, probablemente a través de un servicio
  }
}
