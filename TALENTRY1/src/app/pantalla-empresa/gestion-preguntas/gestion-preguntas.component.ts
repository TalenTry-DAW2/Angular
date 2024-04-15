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
      puntos: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.empService.getCategory().subscribe(data => {
      this.categorias = data[0];
      console.log(this.categorias);
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  get puntos() {
    return this.questionForm.get('puntos') as FormArray;
  }

  addAnswer() {
    this.answers.push(this.formBuilder.control(''));
    this.puntos.push(this.formBuilder.control(''));
  }

  submitForm() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
      // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites
    }
  }
}
