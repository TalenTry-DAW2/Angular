import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-preguntas',
  templateUrl: './gestion-preguntas.component.html',
  styleUrls: ['./gestion-preguntas.component.css']
})
export class GestionPreguntasComponent {

  questionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.questionForm = this.formBuilder.group({
      question: ['', Validators.required],
      answers: this.formBuilder.array([])
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  addAnswer() {
    this.answers.push(this.formBuilder.control(''));
  }

  submitForm() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
      // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites
    }
  }
}
