import { Component, OnInit } from '@angular/core';

// Assuming a simple user model for demonstration purposes
interface User {
  id: number;
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: User[] = [];

  constructor() {}

  ngOnInit(): void {
    // Simulated fetch from a backend
    this.usuarios = [
      { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com' },
      { id: 3, nombre: 'Usuario 3', email: 'usuario3@example.com' }
    ];
  }

  addUser(): void {
    // Simulate adding a new user (you would replace this logic with a call to your backend)
    const newUser: User = {
      id: this.usuarios.length + 1, // Simple ID generation for demonstration
      nombre: `Usuario ${this.usuarios.length + 1}`,
      email: `usuario${this.usuarios.length + 1}@example.com`
    };
    this.usuarios.push(newUser);
  }

  editUser(userId: number): void {
    // Find the user in the array and modify their details (replace this with a backend call)
    const index = this.usuarios.findIndex(user => user.id === userId);
    if (index !== -1) {
      // For demonstration, simply append " - Editado" to the nombre
      this.usuarios[index].nombre += ' - Editado';
      // In a real application, you'd likely show a form to edit the user details
    }
  }

  deleteUser(userId: number): void {
    // Remove the user from the usuarios array (replace with a backend call)
    this.usuarios = this.usuarios.filter(user => user.id !== userId);
  }
}
