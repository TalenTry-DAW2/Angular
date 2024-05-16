import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/models/User';

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

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      DNI: ['', [Validators.required, Validators.pattern(/^\d{8}[a-zA-Z]$/)]],
      password: ['', [Validators.required, Validators.maxLength(30)]],
      confirmPassword: [''],
      phone: ['']
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data:any) => {
      this.usuarios = data[0];
    });
    
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
        const index = this.usuarios.findIndex(user => user.UserID === this.currentUserId);
        if (index !== -1) {
          this.usuarios[index] = { ...this.usuarios[index], ...formValues };
        }
      } else {

      }
    }
  }
  
}
