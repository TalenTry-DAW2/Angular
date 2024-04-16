import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infotest-categoria',
  templateUrl: './infotest-categoria.component.html',
  styleUrls: ['./infotest-categoria.component.css']
})
export class InfotestCategoriaComponent implements OnInit {
  categoriaSeleccionada: any= {};
  longitudEntrevistaSeleccionada: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params) {
        this.categoriaSeleccionada = params;
      }
    });
  }

  empezarEntrevista(longitudEntrevista: number): void {
    if (longitudEntrevista) {
      this.router.navigate(['/test-entrevista', longitudEntrevista]);
    } else {
      alert('Por favor, selecciona la longitud de la entrevista.');
    }
  }

}