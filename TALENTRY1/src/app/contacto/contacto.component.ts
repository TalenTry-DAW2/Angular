import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Aquí puedes enviar el formulario a tu servicio de backend o realizar otras acciones
      console.log(this.contactForm.value);
      // Limpia el formulario después de enviarlo
      this.contactForm.reset();
    } else {
      // Si el formulario no es válido, muestra un mensaje de error o realiza otras acciones
      console.log('El formulario no es válido');
    }
  }
}
