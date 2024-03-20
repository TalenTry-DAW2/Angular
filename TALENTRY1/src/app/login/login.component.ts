import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm!: FormGroup;

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder, public tokenService: TokenService) {
    this.LoginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  //inicia sesion y establece el token de sesion en local storage
  login() {
    if (this.LoginForm.valid) {
      this.authService.Login(this.LoginForm.value).subscribe(
        (data: any) => {
          this.tokenService.setToken(data);
          this.router.navigate(['/pagina-principal']);
          alert('Sesion iniciada correctamente.');
        },
        (error) => {
          alert('Correo o contraseña incorectos');
          throw new Error(error);
        });
    }
  }


}
