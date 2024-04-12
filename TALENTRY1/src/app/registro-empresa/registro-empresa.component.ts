import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  usuario: any = {}; 
  repeatedPassword: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  registrarUsuario(): void {
    if (this.usuario.password !== this.repeatedPassword) {
      console.error('Las contraseñas no coinciden');
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.Registrar(this.usuario).subscribe(
      (response) => {
        console.log('Usuario registrado correctamente', response);
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
