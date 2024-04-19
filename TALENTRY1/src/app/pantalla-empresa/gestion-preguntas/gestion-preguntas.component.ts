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
      // Extracting question data
      const questionData = {
        CategoryID: this.questionForm.get('CategoryID')?.value,
        question: this.questionForm.get('question')?.value,
        answers: this.questionForm.get('answers')?.value,
        QuestionPoints: this.questionForm.get('QuestionPoints')?.value
      };
      // Logging each answer with its corresponding points
      questionData.answers.forEach((answer: string, index: number) => {
        console.log(`Answer ${index + 1}: ${answer}`);
      });
      questionData.QuestionPoints.forEach((points: number, index: number) => {
        console.log(`Points for Answer ${index + 1}: ${points}`);
      });
    } else {
      // Handle form validation errors here
      console.error('Form is invalid. Please check all fields.');
    }
  }
}
