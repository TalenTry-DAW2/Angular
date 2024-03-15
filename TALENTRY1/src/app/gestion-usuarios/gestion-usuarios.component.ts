import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
dni: any;
phone: any;
id: number;
nombre: string;
email: string;
password: string;
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
  showForm = false;
  checkPasswords: any;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}[a-zA-Z]$/)]],
      password: ['', [Validators.required, Validators.maxLength(30)]],
      confirmPassword: [''],
      phone: ['']
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
    this.usuarios = [
      {
        id: 1,
        nombre: 'Usuario 1',
        email: 'usuario1@example.com',
        dni: '12345678A', // Mock DNI value
        password: 'password123', // Mock password value (in real applications, store a hashed password)
        phone: '555123456' // Mock phone number
      },
      {
        id: 2,
        nombre: 'Usuario 2',
        email: 'usuario2@example.com',
        dni: '87654321B',
        password: 'password456',
        phone: '555654321'
      },
      {
        id: 3,
        nombre: 'Usuario 3',
        email: 'usuario3@example.com',
        dni: '11223344C',
        password: 'password789',
        phone: '555789012'
      }
      // Add more users as needed
    ];
    
  }


  
  toggleForm() {
    this.showForm = !this.showForm;
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
          email: formValues.email,
          dni: undefined,
          phone: undefined,
          password: ''
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
