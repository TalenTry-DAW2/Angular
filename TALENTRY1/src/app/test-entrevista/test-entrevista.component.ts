import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-entrevista',
  templateUrl: './test-entrevista.component.html',
  styleUrls: ['./test-entrevista.component.css']
})
export class TestEntrevistaComponent implements OnInit {
  preguntas: any[] = [
    {
      "pregunta": "¿Cuál es la capital de Francia?",
      "opciones": ["Madrid", "París", "Londres"],
      "respuestaCorrecta": "París"
    },
    {
      "pregunta": "¿Quién escribió 'Cien años de soledad'?",
      "opciones": ["Gabriel García Márquez", "Pablo Neruda", "Julio Cortázar"],
      "respuestaCorrecta": "Gabriel García Márquez"
    },
    {
      "pregunta": "¿Cuál es el río más largo del mundo?",
      "opciones": ["Amazonas", "Nilo", "Misisipi"],
      "respuestaCorrecta": "Amazonas"
    },
    {
      "pregunta": "¿En qué año llegó el hombre a la luna por primera vez?",
      "opciones": ["1965", "1969", "1972"],
      "respuestaCorrecta": "1969"
    },
    {
      "pregunta": "¿Cuál es el metal más caro del mundo?",
      "opciones": ["Oro", "Platino", "Rodio"],
      "respuestaCorrecta": "Rodio"
    },
    {
      "pregunta": "¿Quién pintó 'La noche estrellada'?",
      "opciones": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
      "respuestaCorrecta": "Vincent van Gogh"
    },
    {
      "pregunta": "¿Qué planeta es conocido como 'el planeta rojo'?",
      "opciones": ["Marte", "Venus", "Júpiter"],
      "respuestaCorrecta": "Marte"
    },
    {
      "pregunta": "¿Quién fue el primer presidente de Estados Unidos?",
      "opciones": ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
      "respuestaCorrecta": "George Washington"
    },
    {
      "pregunta": "¿Qué elemento químico tiene el símbolo H?",
      "opciones": ["Hidrógeno", "Helio", "Hafnio"],
      "respuestaCorrecta": "Hidrógeno"
    },
    {
      "pregunta": "¿En qué año finalizó la Segunda Guerra Mundial?",
      "opciones": ["1945", "1939", "1950"],
      "respuestaCorrecta": "1945"
    },
    {
      "pregunta": "¿Cuál es el océano más grande del mundo?",
      "opciones": ["Atlántico", "Pacífico", "Índico"],
      "respuestaCorrecta": "Pacífico"
    },
    {
      "pregunta": "¿Quién es el autor de 'Don Quijote de la Mancha'?",
      "opciones": ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche"],
      "respuestaCorrecta": "Miguel de Cervantes"
    },
    {
      "pregunta": "¿Cuál es el país más grande del mundo en términos de territorio?",
      "opciones": ["Estados Unidos", "Canadá", "Rusia"],
      "respuestaCorrecta": "Rusia"
    },
    {
      "pregunta": "¿Cuál es el monte más alto del mundo?",
      "opciones": ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua"],
      "respuestaCorrecta": "Monte Everest"
    },
    {
      "pregunta": "¿Quién fue el primer hombre en viajar al espacio?",
      "opciones": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin"],
      "respuestaCorrecta": "Yuri Gagarin"
    },
    {
      "pregunta": "¿Cuál es la capital de Japón?",
      "opciones": ["Pekín", "Tokio", "Seúl"],
      "respuestaCorrecta": "Tokio"
    },
    {
      "pregunta": "¿Cuál es el hueso más largo del cuerpo humano?",
      "opciones": ["Fémur", "Húmero", "Tibia"],
      "respuestaCorrecta": "Fémur"
    },
    {
      "pregunta": "¿Cuál es el idioma más hablado del mundo?",
      "opciones": ["Mandarín", "Inglés", "Español"],
      "respuestaCorrecta": "Mandarín"
    },
    {
      "pregunta": "¿Cuál es el autor de 'Romeo y Julieta'?",
      "opciones": ["Charles Dickens", "William Shakespeare", "Jane Austen"],
      "respuestaCorrecta": "William Shakespeare"
    },
    {
      "pregunta": "¿Quién es el pintor del famoso cuadro 'La última cena'?",
      "opciones": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
      "respuestaCorrecta": "Leonardo da Vinci"
    },
    {
      "pregunta": "¿Cuál es la velocidad de la luz en el vacío?",
      "opciones": ["299,792 kilómetros por segundo", "300,000 kilómetros por segundo", "299,792 millas por segundo"],
      "respuestaCorrecta": "299,792 kilómetros por segundo"
    },
    {
      "pregunta": "¿Qué planeta es conocido como 'la estrella de la mañana'?",
      "opciones": ["Venus", "Mercurio", "Marte"],
      "respuestaCorrecta": "Venus"
    },
    {
      "pregunta": "¿Cuál es el quinto planeta en el sistema solar?",
      "opciones": ["Júpiter", "Tierra", "Saturno"],
      "respuestaCorrecta": "Júpiter"
    },
    {
      "pregunta": "¿En qué año comenzó la Primera Guerra Mundial?",
      "opciones": ["1914", "1918", "1905"],
      "respuestaCorrecta": "1914"
    },
    {
      "pregunta": "¿Quién fue el primer hombre en pisar la luna?",
      "opciones": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin"],
      "respuestaCorrecta": "Neil Armstrong"
    },
    {
      "pregunta": "¿Cuál es el hueso más pequeño del cuerpo humano?",
      "opciones": ["Estribo", "Maléolo", "Cúbito"],
      "respuestaCorrecta": "Estribo"
    },
    {
      "pregunta": "¿En qué país se encuentra la Torre Eiffel?",
      "opciones": ["Francia", "Italia", "España"],
      "respuestaCorrecta": "Francia"
    },
    {
      "pregunta": "¿Quién es el autor de 'El principito'?",
      "opciones": ["Antoine de Saint-Exupéry", "Miguel de Cervantes", "Friedrich Nietzsche"],
      "respuestaCorrecta": "Antoine de Saint-Exupéry"
    },
    {
      "pregunta": "¿Cuál es el órgano más grande del cuerpo humano?",
      "opciones": ["Piel", "Hígado", "Cerebro"],
      "respuestaCorrecta": "Piel"
    }
  ];  


  preguntaActual: any; // Aquí se almacenará la pregunta actual
  preguntaIndex: number = 0; // El índice de la pregunta actual
  opcionSeleccionada: string = '';
  longitudEntrevista: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Suscribirse al parámetro de longitud de la entrevista
    this.route.params.subscribe(params => {
      this.longitudEntrevista = +params['length']; // Convertir a número
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
    if (this.preguntaIndex < this.longitudEntrevista) {
      this.preguntaActual = this.preguntas[this.preguntaIndex];
      this.preguntaIndex++;
    } else {
      // La entrevista ha finalizado
      alert('Entrevista finalizada');
    }
  }
}

