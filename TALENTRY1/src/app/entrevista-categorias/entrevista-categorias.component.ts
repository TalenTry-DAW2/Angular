import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from "../../models/category";
import { EntrevistaService } from "../servicios/entrevista.service";


@Component({
  selector: 'app-entrevista-categorias',
  templateUrl: './entrevista-categorias.component.html',
  styleUrls: ['./entrevista-categorias.component.css']
})
export class EntrevistaCategoriasComponent implements OnInit {

  @Output() categoriaSeleccionada = new EventEmitter<string>();

  currentPage: number = 1;
  pageSize: number = 48; // Ajusta según la necesidad de mostrar filas de 6
  usersInPage: Category[] = [];
  allUsers: Category[] = [];
  
  

  constructor(private router: Router, private entrevistaService: EntrevistaService) { }

  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers(): void {
    this.entrevistaService.loadUsers()
      .subscribe(data => {
        this.allUsers = data;
        this.usersInPage = data;
        console.log(this.allUsers);
        // Aquí puedes llamar a cualquier método adicional para procesar los datos, si es necesario
      }, error => {
        console.error('Error al cargar los usuarios desde la API:', error);
      });
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }

  irAInfoCategoria(categoryName: string) {
    this.router.navigate(['/infotest', categoryName]);
  }
}