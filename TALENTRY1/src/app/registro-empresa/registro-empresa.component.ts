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

  registrarUsuarioEmpresa(): void {
    if (this.usuario.password !== this.repeatedPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.authService.RegistrarEmpresa(this.usuario).subscribe(
      (response: any) => {
        alert('Empresa registrada correctamente');
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error al registrar la empresa', error);
      }
    );

  }

  ngOnInit(): void {
  }

}
