import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../preguntas.service';

@Component({
  selector: 'app-test-entrevista',
  templateUrl: './test-entrevista.component.html',
  styleUrls: ['./test-entrevista.component.css']
})
export class TestEntrevistaComponent implements OnInit {
  preguntas: any[] = []; // Aquí se almacenarán las preguntas
  preguntaActual: any; // Aquí se almacenará la pregunta actual
  preguntaIndex: number = 0; // El índice de la pregunta actual
  opcionSeleccionada: string = '';

  constructor(private preguntasService: PreguntasService) { }

  ngOnInit(): void {
    this.preguntasService.getPreguntas().subscribe(preguntas => {
      this.preguntas = preguntas;
      this.mostrarSiguientePregunta();
    });
  }

  responderPregunta(opcionSeleccionada: string): void {
    // Guardar la respuesta seleccionada si es necesario
    // Implementar aquí la lógica para manejar la respuesta del usuario
    // Por ejemplo, puedes guardarla en un arreglo o enviarla al servidor
    // No necesitas mostrar si la respuesta es correcta o incorrecta al usuario

    // Muestra la siguiente pregunta después de responder
    this.mostrarSiguientePregunta();
  }

  mostrarSiguientePregunta(): void {
    if (this.preguntaIndex < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.preguntaIndex];
      this.preguntaIndex++;
    } else {
      // La entrevista ha finalizado
      alert('Entrevista finalizada');
    }
  }
}
