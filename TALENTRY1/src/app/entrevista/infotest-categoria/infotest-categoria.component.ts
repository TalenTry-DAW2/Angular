import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/models/category';

@Component({
  selector: 'app-infotest-categoria',
  templateUrl: './infotest-categoria.component.html',
  styleUrls: ['./infotest-categoria.component.css']
})
export class InfotestCategoriaComponent implements OnInit {
  categoria!: category;
  longitudEntrevistaSeleccionada: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.categoria = {
        CategoryID: params['CategoryID'],
        CategoryName: params['CategoryName'],
        description: params['description'],
      };
    });
   }

  ngOnInit(): void {
  }

  empezarEntrevista(longitudEntrevista: number): void {
    if (longitudEntrevista) {
      this.router.navigate(['/test-entrevista', longitudEntrevista]);
    } else {
      alert('Por favor, selecciona la longitud de la entrevista.');
    }
  }

}