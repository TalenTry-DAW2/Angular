import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../servicios/contacto/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm!: FormGroup;
  mensaje: string = '';
  error: string = '';

  constructor(private formBuilder: FormBuilder, private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;
    this.contactoService.enviarContactos(formData).subscribe(
      (response:any) => {
        this.mensaje = 'Mensaje enviado con éxito';
      },
      (error:any) => {
        if (error.status === 401) {
          this.error = 'Error de autenticación: No autorizado';
        } else {
          this.error = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
        }
      }
    );
  }
}