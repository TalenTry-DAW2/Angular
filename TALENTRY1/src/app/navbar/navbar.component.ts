import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion: boolean = false;
  Role: string = '';
  RoleEmpresa: string = '';
  constructor(public authService: AuthService, private router: Router, public tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.IsLogedIn();
    this.GetRole();
  }

  IsLogedIn() {
    this.authService.IsLogedIn().subscribe(
      (data: any) => {
        this.sesion = data.success;
      },
      (error) => {
        throw new Error(error.status);
      });
  }

  GetRole() {
    this.tokenService.getRole().subscribe(
      (data: any) => {
        this.Role = data.type;
      },
      (error:any) => {
        throw new Error(error.status);
      });
  }

  logout() {
    const confirmacion = window.confirm('¿Seguro que desea cerrar sesión?');
    if (confirmacion) {
      this.authService.Logout().subscribe(
        (data: any) => {
          this.router.navigate(['/']);
          if (data) {
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }
        },
        (error) => {
          throw new Error(error.status);
        });
    }
  }
}
