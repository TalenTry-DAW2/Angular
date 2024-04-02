import { Component, OnInit } from '@angular/core';

interface Entrevista {
  preguntas: Pregunta[];
      titulo: string;
  hora: string;
  expanded: boolean;
}

interface Pregunta {
  texto: string;
  respuestaCorrecta: string;
  puntos: number;
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  entrevistas: Entrevista[] = [
    // Repite este formato para las 10 entrevistas con sus respectivas preguntas
    {
      titulo: 'Entrevista de categoría A',
      hora: '10:00 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
    {
      titulo: 'Entrevista de categoría B',
      hora: '11:00 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
    {
      titulo: 'Entrevista de categoría C',
      hora: '10:30 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
    {
      titulo: 'Entrevista de categoría D',
      hora: '11:30 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
    {
      titulo: 'Entrevista de categoría E',
      hora: '09:00 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
    {
      titulo: 'Entrevista de categoría F',
      hora: '08:00 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
    {
      titulo: 'Entrevista de categoría G',
      hora: '11:10 am',
      expanded: false,
      preguntas: [
        { texto: 'Pregunta A1', respuestaCorrecta: 'Respuesta A1', puntos: 10 },
        { texto: 'Pregunta A2', respuestaCorrecta: 'Respuesta A2', puntos: 10 },
        { texto: 'Pregunta A3', respuestaCorrecta: 'Respuesta A3', puntos: 10 },
        { texto: 'Pregunta A4', respuestaCorrecta: 'Respuesta A4', puntos: 10 },
        { texto: 'Pregunta A5', respuestaCorrecta: 'Respuesta A5', puntos: 10 },
        { texto: 'Pregunta A6', respuestaCorrecta: 'Respuesta A6', puntos: 10 },
        { texto: 'Pregunta A7', respuestaCorrecta: 'Respuesta A7', puntos: 10 },
        { texto: 'Pregunta A8', respuestaCorrecta: 'Respuesta A8', puntos: 10 },
        { texto: 'Pregunta A9', respuestaCorrecta: 'Respuesta A9', puntos: 10 },
        { texto: 'Pregunta A10', respuestaCorrecta: 'Respuesta A10', puntos: 10 }
      ]
    },
   

    // ... más entrevistas con estructura similar ...
  ];

  entrevistaSeleccionada: Entrevista | null = null;

  ngOnInit(): void {
    // Cargar datos al inicializar el componente
  }

  toggleDetalles(entrevista: Entrevista): void {
    if (this.entrevistaSeleccionada === entrevista) {
      this.entrevistaSeleccionada = null;
    } else {
      this.entrevistaSeleccionada = entrevista;
    }
    this.entrevistas.forEach((e) => {
      e.expanded = false;
    });
    entrevista.expanded = !entrevista.expanded;
  }
}
