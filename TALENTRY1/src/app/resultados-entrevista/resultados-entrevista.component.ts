import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados-entrevista',
  templateUrl: './resultados-entrevista.component.html',
  styleUrls: ['./resultados-entrevista.component.css']
})
export class ResultadosEntrevistaComponent implements OnInit {
  respuestasUsuario: any[] = [];
  puntajeTotal: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Obtener los datos de las respuestas del usuario desde el estado de la ruta
    const navigation = window.history.state;
    if (navigation && navigation.respuestasUsuario) {
      this.respuestasUsuario = navigation.respuestasUsuario;
      this.calcularPuntajeTotal();
    } else {
      // Si no hay datos de respuestas, redirigir a la página de inicio
      this.router.navigate(['/']);
    }
  }

  calcularPuntajeTotal(): void {
    // Sumar los puntajes de todas las respuestas
    this.puntajeTotal = this.respuestasUsuario.reduce((total, respuesta) => total + respuesta.puntuacion, 0);
  }
}


