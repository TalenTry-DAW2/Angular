import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QA } from 'src/models/QA';
import { Record } from 'src/models/Record';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  entrevistas: Record[] = [];
  respuestas: QA[] = [];
  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    this.CargarEntrevistas();
  }


  CargarEntrevistas() {
    this.userService.CargarEntrevistas().subscribe(
      (data: Record[][]) => {
        this.entrevistas = data[0];
        console.log(this.entrevistas)
      },
      (error) => {

      }
    );
  }
}
