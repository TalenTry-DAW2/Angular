import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrevista-categorias',
  templateUrl: './entrevista-categorias.component.html',
  styleUrls: ['./entrevista-categorias.component.css']
})
export class EntrevistaCategoriasComponent implements OnInit {
  categorias: { CategoryID: number, CategoryName: string, Image: String }[] = [
    {"CategoryID": 1, "CategoryName": "Ingeniería Civil", "Image": "ingenieriacivil.jpg"},
    {"CategoryID": 2, "CategoryName": "Medicina", "Image": "medicina.avif"},
    {"CategoryID": 3, "CategoryName": "Educación", "Image": "educacion.avif"},
    {"CategoryID": 4, "CategoryName": "Diseño Gráfico", "Image": "diseño_grafico.avif"},
    {"CategoryID": 5, "CategoryName": "Marketing", "Image": "marketing.jpg"},
    {"CategoryID": 6, "CategoryName": "Tecnología de la Información", "Image": "educacion.avif"},
    {"CategoryID": 7, "CategoryName": "Finanzas", "Image": "educacion.avif"},
    {"CategoryID": 8, "CategoryName": "Recursos Humanos", "Image": "educacion.avif"},
    {"CategoryID": 9, "CategoryName": "Ventas", "Image": "educacion.avif"},
    {"CategoryID": 10, "CategoryName": "Arquitectura", "Image": "educacion.avif"},
    {"CategoryID": 11, "CategoryName": "Desarrollo de Software", "Image": "educacion.avif"},
    {"CategoryID": 12, "CategoryName": "Salud Mental", "Image": "educacion.avif"},
    {"CategoryID": 13, "CategoryName": "Gastronomía", "Image": "educacion.avif"},
    {"CategoryID": 14, "CategoryName": "Arte y Entretenimiento", "Image": "educacion.avif"},
    {"CategoryID": 15, "CategoryName": "Periodismo", "Image": "educacion.avif"},
    {"CategoryID": 16, "CategoryName": "Transporte", "Image": "educacion.avif"},
    {"CategoryID": 17, "CategoryName": "Inmobiliaria", "Image": "educacion.avif"},
    {"CategoryID": 18, "CategoryName": "Derecho", "Image": "educacion.avif"},
    {"CategoryID": 19, "CategoryName": "Turismo", "Image": "educacion.avif"},
    {"CategoryID": 20, "CategoryName": "Investigación", "Image": "educacion.avif"},
    {"CategoryID": 21, "CategoryName": "Enfermería", "Image": "educacion.avif"}
  ]
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.categorias); 
  }
}
