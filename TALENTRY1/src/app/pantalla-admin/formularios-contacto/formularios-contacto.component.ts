import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../servicios/contacto/contacto.service';

@Component({
  selector: 'app-formularios-contacto',
  templateUrl: './formularios-contacto.component.html',
  styleUrls: ['./formularios-contacto.component.css']
})
export class FormulariosContactoComponent implements OnInit {
  contactos: any[] = []; // Variable para almacenar los contactos

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactoService.getContactos().subscribe((data: any) => {
      this.contactos = data; // Guarda los datos obtenidos en la variable contactos
    });
  }
}
