import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevista-resultado',
  templateUrl: './entrevista-resultado.component.html',
  styleUrls: ['./entrevista-resultado.component.css']
})
export class EntrevistaResultadoComponent implements OnInit {
  respuestasUsuario: { pregunta: string, respuestaUsuario: string, puntuacion: number }[] = [];
  puntuacionTotal: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.respuestasUsuario = navigation.extras.state['respuestasUsuario'];
      this.puntuacionTotal = this.respuestasUsuario.reduce((total, respuesta) => total + respuesta.puntuacion, 0);
    } else {
      this.router.navigate(['/']);
    }
  }
}


