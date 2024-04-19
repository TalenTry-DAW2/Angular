import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { category } from 'src/models/category';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-gestion-preguntas',
  templateUrl: './gestion-preguntas.component.html',
  styleUrls: ['./gestion-preguntas.component.css']
})
export class GestionPreguntasComponent implements OnInit {

  questionForm: FormGroup;
  categorias: category[] = [];

  constructor(private formBuilder: FormBuilder, private empService: EmpresaService) {
    this.questionForm = this.formBuilder.group({
      CategoryID: ['', Validators.required],
      question: ['', Validators.required],
      answers: this.formBuilder.array([]),
      QuestionPoints: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.empService.getCategory().subscribe(data => {
      this.categorias = data[0];
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  get QuestionPoints() {
    return this.questionForm.get('QuestionPoints') as FormArray;
  }

  addAnswer() {
    this.answers.push(this.formBuilder.control(''));
    this.QuestionPoints.push(this.formBuilder.control(''));
  }

  submitForm() {
    if (this.questionForm.valid) {
      this.empService.addQuestion(this.questionForm.value).subscribe(
        (data: any) => {
          alert('Sesion iniciada correctamente.');
        },
        (error) => {
          alert('Correo o contraseña incorectos');
          console.log(error)
          throw new Error(error);
        });
    } else {
      // Handle form validation errors here
      console.error('Form is invalid. Please check all fields.');
    }
    
  }
}
