import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QA } from 'src/models/QA';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  entrevistas: QA[] = [];

  entrevistaSeleccionada: QA | null = null;
  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    // Cargar datos al inicializar el componente
  }

  toggleDetalles(entrevista: QA): void {
    if (this.entrevistaSeleccionada === entrevista) {
      this.entrevistaSeleccionada = null;
    } else {
      this.entrevistaSeleccionada = entrevista;
    };
  }
}
