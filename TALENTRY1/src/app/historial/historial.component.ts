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
      },
      (error) => {

      }
    );
  }


  CargarRespuestas(id:number) {
    console.log(id)
    this.userService.CargarRespuestas(id).subscribe(
      (data: QA[][]) => {
        this.respuestas = data[0];
      },
      (error) => {

      }
    );
  }

  getTimeDifference(startDate: any, endDate: any): string {
    // Convert startDate and endDate to Date objects
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
  
    // Check if startDateObj or endDateObj is a valid Date object
    if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
      return 'Invalid date';
    }
  
    // Calculate the difference in milliseconds
    const diffInMilliseconds = Math.abs(endDateObj.getTime() - startDateObj.getTime());
  
    // Calculate total seconds
    const totalSeconds = Math.floor(diffInMilliseconds / 1000);
  
    // Calculate total minutes
    const totalMinutes = Math.floor(totalSeconds / 60);
  
    // Calculate remaining seconds
    const seconds = totalSeconds % 60;
  
    // Return the time difference in minutes and seconds
    return `${totalMinutes} minutes, ${seconds} seconds`;
  }
  
}
