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
  sesion: boolean;
  constructor(public authService: AuthService, private router: Router, public tokenService: TokenService) { 
    this.sesion = false; 
  }

  ngOnInit(): void {
  }
  logout() {
    const confirmacion = window.confirm('¿Seguro que desea cerrar sesión?');
    if (confirmacion) {
      this.authService.Logout().subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        (error) => {
          throw new Error(error.status);
        });
    }
  }
}
