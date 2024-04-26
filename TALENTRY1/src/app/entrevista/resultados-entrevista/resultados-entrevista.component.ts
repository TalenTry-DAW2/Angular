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

  getTimeDifference(startDate: any, endDate: any): string {
    // Convert startDate and endDate to Date objects
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Check if startDateObj or endDateObj is a valid Date object
    if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
      return 'Invalid date';
    }

    // Calculate the difference in milliseconds
    const diffInMilliseconds = Math.abs(endDateObj.getTime() - startDateObj.getTime());

    const totalMilliseconds = diffInMilliseconds;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const secondsString = seconds.toString().padStart(2, '0');
    const milliseconds = totalMilliseconds % 1000;
    const millisecondsString = milliseconds.toString().padStart(3, '0').slice(0, 2);

    // Return the time difference in minutes, seconds, and milliseconds
    return `${totalMinutes}:${secondsString}:${millisecondsString}`;
  }

  guardar() {
    var parametros = [1, this.puntajeTotal, this.respuestasUsuario[0].FInicio, this.respuestasUsuario[this.respuestasUsuario.length - 1].FFinal];
    this.entrevistaService.GuardarEntrevistaRecord(parametros).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    );
  }
}


