import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../servicios/contacto/contacto.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm!: FormGroup; 
  mensaje: string = ''; 
  error: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

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

    // Ajusta la URL a la dirección correcta de tu API
    const apiUrl = 'http://127.0.0.1:8000/api/contactos';

    // Obtén el token de autenticación del servicio TokenService
    const authToken = this.tokenService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    console.log(formData)
    this.http.post(apiUrl, formData, { headers })
      .subscribe(
        response => {
          this.mensaje = 'Mensaje enviado con éxito';
        },
        error => {
          if (error.status === 401) {
            this.error = 'Error de autenticación: No autorizado';
          } else {
            this.error = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
          }
        }
      );
  }
}