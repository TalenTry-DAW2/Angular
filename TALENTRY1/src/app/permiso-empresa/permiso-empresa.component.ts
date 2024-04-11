import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QA } from 'src/models/QA';
import { Company } from 'src/models/Company';
import { EmpresaService } from '../servicios/empresa.service';


@Component({
  selector: 'app-permiso-empresa',
  templateUrl: './permiso-empresa.component.html',
  styleUrls: ['./permiso-empresa.component.css']
})
export class PermisoEmpresaComponent implements OnInit {

  empresas: Company[] = [];
  constructor(private router: Router, private empresaService: EmpresaService) {

  }
  ngOnInit(): void {
    this.MostrarEmpresas();
  }


  MostrarEmpresas() {
    this.empresaService.MostrarEmpresas().subscribe(
      (data: Company[][]) => {
        this.empresas = data[0];
        console.log(this.empresas)
      },
      (error) => {

      }
    );
  }
}
