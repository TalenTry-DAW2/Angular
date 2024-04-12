import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/models/Company';
import { EmpresaService } from '../servicios/empresa.service';
import { UserService } from '../servicios/user.service';


@Component({
  selector: 'app-permiso-empresa',
  templateUrl: './permiso-empresa.component.html',
  styleUrls: ['./permiso-empresa.component.css']
})
export class PermisoEmpresaComponent implements OnInit {

  empresas: Company[] = [];
  empresaSeleccionada: Company | null = null;
  aceptoPermiso: boolean = false; 
  constructor(private router: Router, private empresaService: EmpresaService, private usersService: UserService) { }

  ngOnInit(): void {
    this.MostrarEmpresas();
  }

  MostrarEmpresas() {
    this.empresaService.MostrarEmpresas().subscribe(
      (data: Company[][]) => {
        this.empresas = data[0];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  seleccionarEmpresa(empresa: Company) {
    this.empresaSeleccionada = empresa;
    this.aceptoPermiso = false;
  }

  confirmarPermiso() {
    if (this.aceptoPermiso && this.empresaSeleccionada && this.empresaSeleccionada.CompanyID !== undefined) {
      const today = new Date();
      const expDate = new Date(today.setMonth(today.getMonth() + 6)); 
      const formattedExpDate = expDate.toISOString().split('T')[0]; // Formatear la fecha como 'YYYY-MM-DD'

      this.usersService.confirmarPermiso(this.empresaSeleccionada.CompanyID, formattedExpDate).subscribe(
        response => {
          alert('Permiso confirmado correctamente');
        },
        error => {
          console.error('Error al confirmar el permiso:', error);
          alert('Error al confirmar el permiso');
        }
      );
    } else {
      console.log("Debe seleccionar una empresa y aceptar el permiso para continuar.");
    }
  }
}
