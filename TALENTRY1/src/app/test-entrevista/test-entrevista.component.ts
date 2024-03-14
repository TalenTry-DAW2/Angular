import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-entrevista',
  templateUrl: './test-entrevista.component.html',
  styleUrls: ['./test-entrevista.component.css']
})
export class TestEntrevistaComponent implements OnInit {
  preguntas: any[] =  [
    {
      "pregunta": "¿Cuál es la capital de Francia?",
      "opciones": [
        {"texto": "Madrid", "puntaje": 0},
        {"texto": "París", "puntaje": 10},
        {"texto": "Londres", "puntaje": 5}
      ],
      "respuestaCorrecta": "París"
    },
    {
      "pregunta": "¿Quién escribió 'Cien años de soledad'?",
      "opciones": [
        {"texto": "Gabriel García Márquez", "puntaje": 10},
        {"texto": "Pablo Neruda", "puntaje": 5},
        {"texto": "Julio Cortázar", "puntaje": 0}
      ],
      "respuestaCorrecta": "Gabriel García Márquez"
    },
    {
      "pregunta": "¿Cuál es el río más largo del mundo?",
      "opciones": [
        {"texto": "Amazonas", "puntaje": 10},
        {"texto": "Nilo", "puntaje": 5},
        {"texto": "Misisipi", "puntaje": 0}
      ],
      "respuestaCorrecta": "Amazonas"
    },
    {
      "pregunta": "¿En qué año llegó el hombre a la luna por primera vez?",
      "opciones": [
        {"texto": "1965", "puntaje": 0},
        {"texto": "1969", "puntaje": 10},
        {"texto": "1972", "puntaje": 5}
      ],
      "respuestaCorrecta": "1969"
    },
    {
      "pregunta": "¿Cuál es el metal más caro del mundo?",
      "opciones": [
        {"texto": "Oro", "puntaje": 0},
        {"texto": "Platino", "puntaje": 5},
        {"texto": "Rodio", "puntaje": 10}
      ],
      "respuestaCorrecta": "Rodio"
    },
    {
      "pregunta": "¿Quién pintó 'La noche estrellada'?",
      "opciones": [
        {"texto": "Pablo Picasso", "puntaje": 0},
        {"texto": "Vincent van Gogh", "puntaje": 10},
        {"texto": "Leonardo da Vinci", "puntaje": 5}
      ],
      "respuestaCorrecta": "Vincent van Gogh"
    },
    {
      "pregunta": "¿Qué planeta es conocido como 'el planeta rojo'?",
      "opciones": [
        {"texto": "Marte", "puntaje": 10},
        {"texto": "Venus", "puntaje": 5},
        {"texto": "Júpiter", "puntaje": 0}
      ],
      "respuestaCorrecta": "Marte"
    },
    {
      "pregunta": "¿Quién fue el primer presidente de Estados Unidos?",
      "opciones": [
        {"texto": "Thomas Jefferson", "puntaje": 0},
        {"texto": "George Washington", "puntaje": 10},
        {"texto": "Abraham Lincoln", "puntaje": 5}
      ],
      "respuestaCorrecta": "George Washington"
    },
    {
      "pregunta": "¿Qué elemento químico tiene el símbolo H?",
      "opciones": [
        {"texto": "Hidrógeno", "puntaje": 10},
        {"texto": "Helio", "puntaje": 5},
        {"texto": "Hafnio", "puntaje": 0}
      ],
      "respuestaCorrecta": "Hidrógeno"
    },
    {
      "pregunta": "¿En qué año finalizó la Segunda Guerra Mundial?",
      "opciones": [
        {"texto": "1945", "puntaje": 10},
        {"texto": "1939", "puntaje": 5},
        {"texto": "1950", "puntaje": 0}
      ],
      "respuestaCorrecta": "1945"
    },
    {
      "pregunta": "¿Cuál es el océano más grande del mundo?",
      "opciones": [
        {"texto": "Atlántico", "puntaje": 0},
        {"texto": "Pacífico", "puntaje": 10},
        {"texto": "Índico", "puntaje": 5}
      ],
      "respuestaCorrecta": "Pacífico"
    },
    {
      "pregunta": "¿Quién es el autor de 'Don Quijote de la Mancha'?",
      "opciones": [
        {"texto": "Miguel de Cervantes", "puntaje": 10},
        {"texto": "William Shakespeare", "puntaje": 5},
        {"texto": "Friedrich Nietzsche", "puntaje": 0}
      ],
      "respuestaCorrecta": "Miguel de Cervantes"
    },
    {
      "pregunta": "¿Cuál es el país más grande del mundo en términos de territorio?",
      "opciones": [
        {"texto": "Estados Unidos", "puntaje": 0},
        {"texto": "Canadá", "puntaje": 5},
        {"texto": "Rusia", "puntaje": 10}
      ],
      "respuestaCorrecta": "Rusia"
    },
    {
      "pregunta": "¿Cuál es el monte más alto del mundo?",
      "opciones": [
        {"texto": "Monte Everest", "puntaje": 10},
        {"texto": "Monte Kilimanjaro", "puntaje": 5},
        {"texto": "Monte Aconcagua", "puntaje": 0}
      ],
      "respuestaCorrecta": "Monte Everest"
    },
    {
      "pregunta": "¿Quién fue el primer hombre en viajar al espacio?",
      "opciones": [
        {"texto": "Yuri Gagarin", "puntaje": 10},
        {"texto": "Neil Armstrong", "puntaje": 5},
        {"texto": "Buzz Aldrin", "puntaje": 0}
      ],
      "respuestaCorrecta": "Yuri Gagarin"
    },
    {
      "pregunta": "¿Cuál es la capital de Japón?",
      "opciones": [
        {"texto": "Pekín", "puntaje": 0},
        {"texto": "Tokio", "puntaje": 10},
        {"texto": "Seúl", "puntaje": 5}
      ],
      "respuestaCorrecta": "Tokio"
    },
    {
      "pregunta": "¿Cuál es el hueso más largo del cuerpo humano?",
      "opciones": [
        {"texto": "Fémur", "puntaje": 10},
        {"texto": "Húmero", "puntaje": 5},
        {"texto": "Tibia", "puntaje": 0}
      ],
      "respuestaCorrecta": "Fémur"
    },
    {
      "pregunta": "¿Cuál es el idioma más hablado del mundo?",
      "opciones": [
        {"texto": "Mandarín", "puntaje": 10},
        {"texto": "Inglés", "puntaje": 5},
        {"texto": "Español", "puntaje": 0}
      ],
      "respuestaCorrecta": "Mandarín"
    },
    {
      "pregunta": "¿Cuál es el autor de 'Romeo y Julieta'?",
      "opciones": [
        {"texto": "Charles Dickens", "puntaje": 0},
        {"texto": "William Shakespeare", "puntaje": 10},
        {"texto": "Jane Austen", "puntaje": 5}
      ],
      "respuestaCorrecta": "William Shakespeare"
    },
    {
      "pregunta": "¿Quién es el pintor del famoso cuadro 'La última cena'?",
      "opciones": [
        {"texto": "Leonardo da Vinci", "puntaje": 10},
        {"texto": "Pablo Picasso", "puntaje": 0},
        {"texto": "Vincent van Gogh", "puntaje": 5}
      ],
      "respuestaCorrecta": "Leonardo da Vinci"
    },
    {
      "pregunta": "¿Cuál es la velocidad de la luz en el vacío?",
      "opciones": [
        {"texto": "299,792 kilómetros por segundo", "puntaje": 10},
        {"texto": "300,000 kilómetros por segundo", "puntaje": 5},
        {"texto": "299,792 millas por segundo", "puntaje": 0}
      ],
      "respuestaCorrecta": "299,792 kilómetros por segundo"
    },
    {
      "pregunta": "¿Qué planeta es conocido como 'la estrella de la mañana'?",
      "opciones": [
        {"texto": "Venus", "puntaje": 10},
        {"texto": "Mercurio", "puntaje": 5},
        {"texto": "Marte", "puntaje": 0}
      ],
      "respuestaCorrecta": "Venus"
    },
    {
      "pregunta": "¿Cuál es el quinto planeta en el sistema solar?",
      "opciones": [
        {"texto": "Júpiter", "puntaje": 10},
        {"texto": "Tierra", "puntaje": 5},
        {"texto": "Saturno", "puntaje": 0}
      ],
      "respuestaCorrecta": "Júpiter"
    },
    {
      "pregunta": "¿En qué año comenzó la Primera Guerra Mundial?",
      "opciones": [
        {"texto": "1914", "puntaje": 10},
        {"texto": "1918", "puntaje": 5},
        {"texto": "1905", "puntaje": 0}
      ],
      "respuestaCorrecta": "1914"
    },
    {
      "pregunta": "¿Quién fue el primer hombre en pisar la luna?",
      "opciones": [
        {"texto": "Buzz Aldrin", "puntaje": 0},
        {"texto": "Neil Armstrong", "puntaje": 10},
        {"texto": "Yuri Gagarin", "puntaje": 5}
      ],
      "respuestaCorrecta": "Neil Armstrong"
    },
    {
      "pregunta": "¿Cuál es el hueso más pequeño del cuerpo humano?",
      "opciones": [
        {"texto": "Estribo", "puntaje": 10},
        {"texto": "Maléolo", "puntaje": 5},
        {"texto": "Cúbito", "puntaje": 0}
      ],
      "respuestaCorrecta": "Estribo"
    },
    {
      "pregunta": "¿En qué país se encuentra la Torre Eiffel?",
      "opciones": [
        {"texto": "Francia", "puntaje": 10},
        {"texto": "Italia", "puntaje": 5},
        {"texto": "España", "puntaje": 0}
      ],
      "respuestaCorrecta": "Francia"
    },
    {
      "pregunta": "¿Quién es el autor de 'El principito'?",
      "opciones": [
        {"texto": "Antoine de Saint-Exupéry", "puntaje": 10},
        {"texto": "Miguel de Cervantes", "puntaje": 5},
        {"texto": "Friedrich Nietzsche", "puntaje": 0}
      ],
      "respuestaCorrecta": "Antoine de Saint-Exupéry"
    },
    {
      "pregunta": "¿Cuál es el órgano más grande del cuerpo humano?",
      "opciones": [
        {"texto": "Piel", "puntaje": 10},
        {"texto": "Hígado", "puntaje": 5},
        {"texto": "Cerebro", "puntaje": 0}
      ],
      "respuestaCorrecta": "Piel"
    }
];


  preguntaActual: any; // Aquí se almacenará la pregunta actual
  preguntaIndex: number = 0; // Comenzamos con la primera pregunta
  opcionSeleccionada: string = '';
  longitudEntrevista: number = 0; // Longitud de la entrevista seleccionada por el usuario
  respuestasUsuario: any[] = []; // Almacena las respuestas del usuario y su puntuación

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.preguntas);
    // Suscribirse al parámetro de longitud de la entrevista
    this.route.params.subscribe(params => {
      this.longitudEntrevista = +params['length']; // Convertir a número
      this.mostrarSiguientePregunta(); // Mostrar la primera pregunta al iniciar el componente
    });
  }
  
  responderPregunta(): void {
    // Obtener el puntaje de la opción seleccionada
    const puntaje = this.preguntaActual.opciones.find((opcion: any) => opcion.valor === this.opcionSeleccionada)?.puntaje || 0;
    
    // Almacenar la pregunta, la respuesta del usuario y su puntuación
    this.respuestasUsuario.push({
      pregunta: this.preguntaActual.pregunta,
      respuestaUsuario: this.opcionSeleccionada,
      puntuacion: puntaje
    });
    
    // Reiniciar la opción seleccionada después de responder
    this.opcionSeleccionada = '';
    
    // Mostrar la siguiente pregunta después de responder
    this.mostrarSiguientePregunta();
}

  mostrarSiguientePregunta(): void {
    if (this.preguntaIndex < this.longitudEntrevista && this.preguntaIndex < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.preguntaIndex];
      this.preguntaIndex++;
    } else {
      // La entrevista ha finalizado
      // Redirigir al componente de resultado y pasar los datos
      this.router.navigate(['resultados-entrevista'], { state: { respuestasUsuario: this.respuestasUsuario } });
    }
  }
}



