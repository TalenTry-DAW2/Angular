import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  sesion: boolean = false;
  AvisoSesion: boolean = false;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.IsLogedIn();
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

  ToggleAvisoSesion() {
    this.AvisoSesion = !this.AvisoSesion;
  }


}
