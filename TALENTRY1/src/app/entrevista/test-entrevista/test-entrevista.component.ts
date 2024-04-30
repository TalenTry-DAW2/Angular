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
    this.renderDivs();
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
      this.respuestaUsuario.FInicio = new Date;
      this.posicion++;
      this.seleccionada = "";
      this.setPosicion();
      this.updateDivs();
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

  
  renderDivs(): void {
    const container = document.getElementById("longitud");
    if (!container) return;

    const length = this.preguntasYRespuestas.length;
    const position = this.posicion;
    for (let i = 0; i < length; i++) {
      const div = document.createElement("div");
      div.textContent = ``;
      if (i < position) {
        div.setAttribute("style", "width: 15px; height: 15px; background-color: #17a2b8; border: 1px solid black; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);");
      } else {
        div.setAttribute("style", "width: 15px; height: 15px; background-color: white; border: 1px solid black; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);");
      }

      container.appendChild(div);
    }
  }
  updateDivs(): void {
    const container = document.getElementById("longitud");
    if (!container) return;
  
    const length = this.preguntasYRespuestas.length;
    const position = this.posicion;
    const divs = container.querySelectorAll("div");

    divs.forEach((div, i) => {
      if (i < position) {
        div.setAttribute("style", "width: 15px; height: 15px; background-color: #17a2b8; border: 1px solid black; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);");
      } else {
        div.setAttribute("style", "width: 15px; height: 15px; background-color: white; border: 1px solid black; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);");
      }
    });
  }
}

