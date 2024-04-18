import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from '../../servicios/entrevista.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-entrevista',
  templateUrl: './test-entrevista.component.html',
  styleUrls: ['./test-entrevista.component.css']
})
export class TestEntrevistaComponent implements OnInit {
  preguntasYRespuestas: any[] = [];
  length? : number;
  categoryId?: number;
  constructor(private route: ActivatedRoute, private router: Router, private entrevistaService: EntrevistaService) { }

  ngOnInit(): void {
      

    this.route.queryParams.subscribe(params => {
      this.length = params['longitud'];
      this.categoryId = params['categoria'];
    });
    //con length y category_id obtiene las preguntas y respuestas para hacer la entrevista
  }


}

