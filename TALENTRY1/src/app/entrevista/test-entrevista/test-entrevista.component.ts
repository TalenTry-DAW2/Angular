import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from '../../servicios/entrevista.service';

@Component({
  selector: 'app-test-entrevista',
  templateUrl: './test-entrevista.component.html',
  styleUrls: ['./test-entrevista.component.css']
})
export class TestEntrevistaComponent implements OnInit {
  preguntasYRespuestas: any[] = [];

  constructor(private entrevistaService: EntrevistaService) { }

  ngOnInit(): void {
    const categoriaId = 10; 
    const cantidadPreguntas = 1; 

    this.entrevistaService.obtenerPreguntasYRespuestas(categoriaId, cantidadPreguntas)
      .subscribe(respuesta => {
        console.log(respuesta);
        this.preguntasYRespuestas = respuesta;
      },
      (error) => {
        throw new Error(error.status);
      });
  }


}

