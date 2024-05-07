import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { category } from 'src/models/category';
import { Question } from 'src/models/Question';
import { Record } from 'src/models/Record';
import { UserService } from '../../servicios/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  entrevistas: Record[] = [];
  preguntas: Question[] = [];
  categorias: category[] = [];
  CategoryID: number= 0;
  questionForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: UserService, private empService: EmpresaService,private cdr: ChangeDetectorRef) {
    this.questionForm = this.formBuilder.group({
      CategoryID: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    
    this.empService.getCategory().subscribe(data => {
      this.categorias = data[0];
    });
  }

  CargarPreguntas() {
    this.empService.getPreguntas(this.questionForm.get('CategoryID')?.value).subscribe(
      (data: Question[][]) => {
        this.preguntas = data[0];
        this.cdr.detectChanges();
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
    return `${totalMinutes} minutos, ${seconds} segundos`;
  }


}
