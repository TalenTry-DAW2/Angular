import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { EntrevistaService } from 'src/app/servicios/entrevista.service';
import { category } from 'src/models/category';

@Component({
  selector: 'app-infotest-categoria',
  templateUrl: './infotest-categoria.component.html',
  styleUrls: ['./infotest-categoria.component.css']
})
export class InfotestCategoriaComponent implements OnInit {
  categoria!: category;
  longitudEntrevistaSeleccionada: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private entrevistaService: EntrevistaService) {
    this.route.queryParams.subscribe(params => {
      this.categoria = {
        CategoryID: params['CategoryID'],
        CategoryName: params['CategoryName'],
        description: params['description'],
        image: params['image'],
      };
    });
  }

  ngOnInit(): void {
  }

  empezarEntrevista(longitudEntrevista: number): void {
    if (longitudEntrevista) {
      this.cargarQA();
      this.router.navigate(['/entrevista/pregunta']);
    }else {
      alert('Por favor, selecciona la longitud de la entrevista.');
    }
  }

  cargarQA() {
    this.entrevistaService.obtenerPreguntasYRespuestas(this.categoria.CategoryID, this.longitudEntrevistaSeleccionada).subscribe(
      (data: any) => {
        this.entrevistaService.setQA(data)
      },
      (error: string | undefined) => {
        throw new Error(error);
      });
  }

}