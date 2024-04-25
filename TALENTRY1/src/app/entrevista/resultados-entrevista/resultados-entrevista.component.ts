import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrevistaService } from 'src/app/servicios/entrevista.service';
import { Respuestas } from 'src/models/Respuestas';

@Component({
  selector: 'app-resultados-entrevista',
  templateUrl: './resultados-entrevista.component.html',
  styleUrls: ['./resultados-entrevista.component.css']
})
export class ResultadosEntrevistaComponent implements OnInit {
  length: number = this.entrevistaService.getQALength();
  respuestasUsuario: Respuestas[] = [];
  puntajeTotal: number = 0;

  constructor(private router: Router, private entrevistaService: EntrevistaService) { }

  ngOnInit(): void {
    this.getRespuesta()
    if (this.respuestasUsuario.length > 0) {
      this.calcularPuntajeTotal();
    } else {
      // Si no hay datos de respuestas, redirigir a la página de inicio
      this.router.navigate(['/']);
    }
  }
  getRespuesta() {
    this.entrevistaService.getSeleccionadas().subscribe(data => {
      this.respuestasUsuario = data;
    });
  }
  calcularPuntajeTotal(): void {
    // Sumar los puntajes de todas las respuestas
    this.puntajeTotal = this.respuestasUsuario.reduce((total, respuesta) => total + respuesta.puntuacion, 0);
  }
}


