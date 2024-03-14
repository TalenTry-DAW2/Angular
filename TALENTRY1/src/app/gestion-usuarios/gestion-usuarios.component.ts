import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  userForm: FormGroup;
  showModal: boolean = false;
  isEditing: boolean = false;
  currentUserId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.usuarios = [
      { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com' },
      { id: 3, nombre: 'Usuario 3', email: 'usuario3@example.com' }
    ];
  }

  openModal(): void {
    this.showModal = true;
    this.userForm.reset();
    this.isEditing = false;
    this.currentUserId = null;
  }

  closeModal(): void {
    this.showModal = false;
  }


  addUser(): void {
    this.isEditing = false;
    this.currentUserId = null;
    this.userForm.reset();
  }

  saveUser(): void {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      if (this.isEditing && this.currentUserId !== null) {
        const index = this.usuarios.findIndex(user => user.id === this.currentUserId);
        if (index !== -1) {
          this.usuarios[index] = { ...this.usuarios[index], ...formValues };
        }
      } else {
        const newUser: User = {
          id: this.usuarios.length + 1,
          nombre: formValues.nombre,
          email: formValues.email
        };
        this.usuarios.push(newUser);
      }
    }
  }

  editUser(userId: number): void {
    const user = this.usuarios.find(u => u.id === userId);
    if (user) {
      this.userForm.setValue({ nombre: user.nombre, email: user.email });
      this.isEditing = true;
      this.currentUserId = userId;
    }
  }

  deleteUser(userId: number): void {
    this.usuarios = this.usuarios.filter(user => user.id !== userId);
    // No es necesario llamar a detectChanges de ChangeDetectorRef
  }
}
