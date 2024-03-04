import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrevista-categorias',
  templateUrl: './entrevista-categorias.component.html',
  styleUrls: ['./entrevista-categorias.component.css']
})
export class EntrevistaCategoriasComponent implements OnInit {
  categorias: { CategoryID: number, CategoryName: string, Image: String }[] = [
    {"CategoryID": 1, "CategoryName": "Ingeniería Civil", "Image": "ingenieriacivil.jpg"},
    {"CategoryID": 2, "CategoryName": "Medicina", "Image": "medicina.jpg"},
    {"CategoryID": 3, "CategoryName": "Educación", "Image": "educacion.jpg"},
    {"CategoryID": 4, "CategoryName": "Diseño Gráfico", "Image": "diseno_grafico.jpg"},
    {"CategoryID": 5, "CategoryName": "Marketing", "Image": "marketing.jpg"},
    {"CategoryID": 6, "CategoryName": "Tecnología de la Información", "Image": "tecnologia_informacion.jpg"},
    {"CategoryID": 7, "CategoryName": "Finanzas", "Image": "finanzas.jpg"},
    {"CategoryID": 8, "CategoryName": "Recursos Humanos", "Image": "recursos_humanos.jpg"},
    {"CategoryID": 9, "CategoryName": "Ventas", "Image": "ventas.jpg"},
    {"CategoryID": 10, "CategoryName": "Arquitectura", "Image": "arquitectura.jpg"},
    {"CategoryID": 11, "CategoryName": "Desarrollo de Software", "Image": "desarrollo_software.jpg"},
    {"CategoryID": 12, "CategoryName": "Salud Mental", "Image": "salud_mental.jpg"},
    {"CategoryID": 13, "CategoryName": "Gastronomía", "Image": "gastronomia.jpg"},
    {"CategoryID": 14, "CategoryName": "Arte y Entretenimiento", "Image": "arte_entretenimiento.jpg"},
    {"CategoryID": 15, "CategoryName": "Periodismo", "Image": "periodismo.jpg"},
    {"CategoryID": 16, "CategoryName": "Transporte", "Image": "transporte.jpg"},
    {"CategoryID": 17, "CategoryName": "Inmobiliaria", "Image": "inmobiliaria.jpg"},
    {"CategoryID": 18, "CategoryName": "Derecho", "Image": "derecho.jpg"},
    {"CategoryID": 19, "CategoryName": "Turismo", "Image": "turismo.jpg"},
    {"CategoryID": 20, "CategoryName": "Investigación", "Image": "investigacion.jpg"}
  ]
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.categorias); 
  }
}
