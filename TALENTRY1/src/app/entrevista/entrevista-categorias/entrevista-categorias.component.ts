import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { category } from "../../../models/category";
import { EntrevistaService } from "../../servicios/entrevista.service";


@Component({
  selector: 'app-entrevista-categorias',
  templateUrl: './entrevista-categorias.component.html',
  styleUrls: ['./entrevista-categorias.component.css']
})
export class EntrevistaCategoriasComponent implements OnInit {

  @Output() categoriaSeleccionada = new EventEmitter<string>();

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

  seleccionarCategoria(categoria: any) {
    this.categoriaSeleccionada.emit(categoria);
  }

  irAInfoCategoria(categoryName: any) {
    this.router.navigate(['/infotest', categoryName]);
  }
}