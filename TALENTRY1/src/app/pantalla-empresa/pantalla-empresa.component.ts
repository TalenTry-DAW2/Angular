import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../servicios/empresa.service';

@Component({
  selector: 'app-pantalla-empresa',
  templateUrl: './pantalla-empresa.component.html',
  styleUrls: ['./pantalla-empresa.component.css']
})
export class PantallaEmpresaComponent implements OnInit {
  porcentajeSimulaciones: number = 0;
  usuarios: number = 0;
  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.empresaService.getUsuariosRegistrados().subscribe(
      (data: any) => {
        this.usuarios = data;
      },
      (error) => {
        alert('Hubo un error al añadir la pregunta, intentelo mas tarde.');
        throw new Error(error);
      });
      this.empresaService.getPorcentajeUsuariosEntrevista().subscribe(
        (data: any) => {
          this.porcentajeSimulaciones = data;
        },
        (error) => {
          alert('Hubo un error al añadir la pregunta, intentelo mas tarde.');
          throw new Error(error);
        });
    
   
  }
}
