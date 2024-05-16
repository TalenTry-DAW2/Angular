import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { category } from 'src/models/category';

@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.component.html',
  styleUrls: ['./gestion-categorias.component.css']
})
export class GestionCategoriasComponent implements OnInit {
  categorias: category[] = [];
  constructor(private empService: EmpresaService) { }

  ngOnInit(): void {
    this.empService.getCategory().subscribe(data => {
      this.categorias = data[0];
    });
  }

}
