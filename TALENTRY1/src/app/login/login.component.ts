import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/app/pagina-principal']); // Asegúrate de que esta es tu ruta correcta
  }

  register() {
    this.router.navigate(['/registro']); // Asegúrate de que esta es tu ruta correcta
  }
}
