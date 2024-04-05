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
    // Aquí deberías obtener el ID de la categoría y la cantidad de preguntas de alguna manera
    const categoriaId = 1; // Por ejemplo, supongamos que la categoría es la 1
    const cantidadPreguntas = 5; // Por ejemplo, supongamos que queremos 5 preguntas

    this.entrevistaService.obtenerPreguntasYRespuestas(categoriaId, cantidadPreguntas)
      .subscribe(respuesta => {
        this.preguntasYRespuestas = respuesta;
      });
  }


}

