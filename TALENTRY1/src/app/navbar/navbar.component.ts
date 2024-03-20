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

  constructor(public authService: AuthService, private router: Router, public tokenService: TokenService) {}

  ngOnInit(): void {
  }
  logout(){
    var estado: any = false;
    const confirmacion = window.confirm('¿Seguro que desea cerrar sesión?');
    if (confirmacion) {
      this.authService.Logout().subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          throw new Error(error);
        });
      // if (estado) {
      //   this.tokenService.removeToken()
      //   this.router.navigate(['/login']);
      // } else {
      //   //avisa de que algo ah ido mal
      //   alert('Error al cerrar sesion');
      // }
    }
  }
}
