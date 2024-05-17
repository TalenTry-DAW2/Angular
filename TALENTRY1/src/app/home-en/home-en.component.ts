import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent implements OnInit {

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
