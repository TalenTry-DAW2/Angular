import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from '../../servicios/entrevista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasRespuestas } from 'src/models/PreguntasRespuestas';
import { Respuestas, RespuestasClass } from 'src/models/Respuestas';

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
  puntosSeleccionada: number = -1;
  respuestasUsuario: RespuestasClass[] = Array.from({ length: this.length }, () => new RespuestasClass());
  constructor(private route: ActivatedRoute, private router: Router, private entrevistaService: EntrevistaService) {
  }

  ngOnInit(): void {
    this.cargarEntrevista()
  }

  cargarEntrevista() {
    this.entrevistaService.getQA().subscribe(data => {
      this.preguntasYRespuestas = data;
    });
    this.getPosicion();
    this.respuestasUsuario[this.posicion].FInicio = new Date;
  }

  getPosicion() {
    this.posicion = this.entrevistaService.getPosicion();
  }

  setPosicion() {
    this.entrevistaService.setPosicion(this.posicion);
  }

  setRespuesta() {
    this.entrevistaService.setSeleccionadas(this.respuestasUsuario);
  }

  selectAnswer(answer: string, points: number) {
    if (this.seleccionada == answer) {
      this.seleccionada = "";
      this.puntosSeleccionada = -1;
    } else {
      this.seleccionada = answer;
      this.puntosSeleccionada = points;
    }

  }

  siguientePregunta() {
    if (this.posicion < this.preguntasYRespuestas.length) {
      this.respuestasUsuario[this.posicion].pregunta = this.preguntasYRespuestas[this.posicion].pregunta.question;
      this.respuestasUsuario[this.posicion].respuesta = this.seleccionada;
      this.respuestasUsuario[this.posicion].FFinal = new Date;
      this.respuestasUsuario[this.posicion].puntuacion = this.puntosSeleccionada;
      this.setRespuesta();
      this.posicion++;
      this.setPosicion();
      this.entrevistaService.setQA(this.preguntasYRespuestas)
      this.router.navigate(['/entrevista/pregunta']);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {

      this.router.navigate(['/entrevista/resultados']);
    }

  }
}

