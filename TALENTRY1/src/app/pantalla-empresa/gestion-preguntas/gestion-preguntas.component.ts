import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-preguntas',
  templateUrl: './gestion-preguntas.component.html',
  styleUrls: ['./gestion-preguntas.component.css']
})
export class GestionPreguntasComponent {

  preguntaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.preguntaForm = this.formBuilder.group({
      preguntas: this.formBuilder.array([])
    });
  }

  get preguntas(): FormArray {
    return this.preguntaForm.get('preguntas') as FormArray;
  }

  getPreguntasControls() {
    return this.preguntas instanceof FormArray ? this.preguntas.controls : [];
  }
  
  getPreguntaRespuestasControls(pregunta: FormGroup) {
    const respuestas = pregunta.get('respuestas');
    return respuestas instanceof FormArray ? respuestas.controls : [];
  }

  agregarPregunta() {
    const pregunta = this.formBuilder.group({
      enunciado: ['', Validators.required],
      respuestas: this.formBuilder.array([])
    });
    this.preguntas.push(pregunta);
  }

  agregarRespuesta(pregunta: FormGroup) {
    const respuestas = pregunta.get('respuestas') as FormArray;
    respuestas.push(this.formBuilder.control(''));
  }
}
