import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { category } from "../../../models/category";
import { EntrevistaService } from "../../servicios/entrevista.service";


@Component({
  selector: 'app-entrevista-categorias',
  templateUrl: './entrevista-categorias.component.html',
  styleUrls: ['./entrevista-categorias.component.css']
})
export class EntrevistaCategoriasComponent implements OnInit {

 categoriaSeleccionada:category = {
  CategoryID: 0,
  CategoryName: "",
  description: "",
  image: ""
};

  categorias: category[] = [];
  
  

  constructor(private router: Router, private entrevistaService: EntrevistaService) { }

  ngOnInit() {
    this.MostrarCategoria();
  }
  
  MostrarCategoria(): void {
    this.entrevistaService.MostrarCategoria()
      .subscribe(data => {
        this.categorias = data[0];
      }, error => {
        console.error('Error al cargar las categorias desde la API:', error);
      });
  }

  irAInfoCategoria(category: category) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        CategoryID: category.CategoryID,
        CategoryName: category.CategoryName,
        description: category.description,
      }
    };

    this.router.navigate(['/entrevista/info-categoria'], navigationExtras);
  }
}