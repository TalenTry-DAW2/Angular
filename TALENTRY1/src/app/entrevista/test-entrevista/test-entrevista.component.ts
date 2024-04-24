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
  respuestasUsuario: RespuestasClass[] = Array.from({ length: 35 }, () => new RespuestasClass());
  length: number = 0;
  posicion: number = 0;
  seleccionada: string = "";
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
  }

  getPosicion() {
    this.posicion = this.entrevistaService.getPosicion();
  }

  setPosicion() {
    this.entrevistaService.setPosicion(this.posicion);
  }

  selectAnswer(answer: string) {
    if (this.seleccionada == answer) {
      this.seleccionada = "";
    } else {
      this.seleccionada = answer;
    }

  }

  siguientePregunta() {
    if (this.posicion < this.preguntasYRespuestas.length) {
      this.respuestasUsuario[this.posicion].respuesta = this.seleccionada;
      this.posicion++;
      this.setPosicion();
      this.seleccionada = "";
      this.entrevistaService.setQA(this.preguntasYRespuestas)
    } else {
      this.router.navigate(['/entrevista/resultados']);
    }

  }
}

