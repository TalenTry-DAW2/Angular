import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  

  constructor(private router: Router) { }


  register() {
    this.router.navigate(['/login']); // Asegúrate de que esta es tu ruta correcta
  }
  ngOnInit(): void {
  }

}
