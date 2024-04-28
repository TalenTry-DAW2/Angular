import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from '../../servicios/entrevista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasRespuestas } from 'src/models/PreguntasRespuestas';
import { Respuestas } from 'src/models/Respuestas';

@Component({
  selector: 'app-test-entrevista',
  templateUrl: './test-entrevista.component.html',
  styleUrls: ['./test-entrevista.component.css']
})
export class TestEntrevistaComponent implements OnInit {
  preguntasYRespuestas: PreguntasRespuestas[] = [];
  length: number = this.entrevistaService.getQALength();
  posicion: number = 0;
  seleccionada: string = "";
  puntosSeleccionada: number = 0;
  respuestaUsuario: Respuestas;
  constructor(private router: Router, private entrevistaService: EntrevistaService) {
    this.respuestaUsuario = { 'pregunta': '', 'respuesta': '', 'puntuacion': 0, 'FInicio': new Date(), 'FFinal': new Date() };
  }

  ngOnInit(): void {
    this.cargarEntrevista()
  }

  cargarEntrevista() {
    this.getPosicion();
    this.entrevistaService.getQA().subscribe(data => {
      this.preguntasYRespuestas = data;
    });

  }

  getPosicion() {
    this.posicion = this.entrevistaService.getPosicion();
  }

  setPosicion() {
    this.entrevistaService.setPosicion(this.posicion);
  }

  setRespuesta() {
    this.entrevistaService.setSeleccionada(this.respuestaUsuario, this.posicion, this.preguntasYRespuestas[this.posicion].pregunta.QuestionID);
  }

  selectAnswer(answer: string, points: number) {
    if (this.seleccionada == answer) {
      this.seleccionada = "";
      this.puntosSeleccionada = 0;
    } else {
      this.seleccionada = answer;
      this.puntosSeleccionada = points;
    }

  }

  siguientePregunta() {
    if (this.posicion == this.preguntasYRespuestas.length) {
      this.router.navigate(['/entrevista/resultados']);
    } else {
      this.respuestaUsuario.pregunta = this.preguntasYRespuestas[this.posicion].pregunta.question;
      this.respuestaUsuario.respuesta = this.seleccionada;
      this.respuestaUsuario.FFinal = new Date;
      this.respuestaUsuario.puntuacion = this.puntosSeleccionada;
      this.setRespuesta();
      this.entrevistaService.setQA(this.preguntasYRespuestas)
      this.router.navigate(['/entrevista/pregunta']);
      this.respuestaUsuario.FInicio = new Date;
      this.posicion++;
      this.seleccionada = "";
      this.setPosicion();
      if (this.posicion == this.preguntasYRespuestas.length) {
        this.router.navigate(['/entrevista/resultados']);
      }
    }

  }

  recargar() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
    this.respuestaUsuario.FInicio = new Date;
  }
}

