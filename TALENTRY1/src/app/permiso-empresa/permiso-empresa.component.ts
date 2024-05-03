import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/models/Company';
import { Share } from 'src/models/Share';
import { EmpresaService } from '../servicios/empresa.service';
import { UserService } from '../servicios/user.service';


@Component({
  selector: 'app-permiso-empresa',
  templateUrl: './permiso-empresa.component.html',
  styleUrls: ['./permiso-empresa.component.css']
})
export class PermisoEmpresaComponent implements OnInit {
  shares: Share[] = [];
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
        // Loop through the companies
        this.empresaService.getShare().subscribe(
          (data: Share[][]) => {
            this.shares = data[0];
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set hours to beginning of the day

            this.empresas.forEach(company => {
              // Check if the company ID exists in any of the shares
              const foundShare = this.shares.find(share => share.CompanyID === company.CompanyID);
              // Set activa based on the existence of shares
              company.share = foundShare ? true : false;
              company.activa = foundShare && new Date(foundShare.ExpiredDate) >= today;
            });
          },
          (error) => {
            console.error(error);
          }
        );
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
          setTimeout(() => {
            window.location.reload();
          }, 100);
        },
        error => {
          console.error('Error al confirmar el permiso:', error);
          alert('Error al confirmar el permiso');
        }
      );
    }
  }
  actualizarPermiso() {
    if (this.aceptoPermiso && this.empresaSeleccionada && this.empresaSeleccionada.CompanyID !== undefined) {
      const today = new Date();
      const expDate = new Date(today.setMonth(today.getMonth() + 6));
      const formattedExpDate = expDate.toISOString().split('T')[0]; // Formatear la fecha como 'YYYY-MM-DD'

      this.usersService.updatePermiso(this.empresaSeleccionada.CompanyID, formattedExpDate).subscribe(
        response => {
          alert('Permiso confirmado correctamente');
          setTimeout(() => {
            window.location.reload();
          }, 100);
        },
        error => {
          console.error('Error al confirmar el permiso:', error);
          alert('Error al confirmar el permiso');
        }
      );
    }
  }
  cancelarPermiso() {
    if (this.aceptoPermiso && this.empresaSeleccionada && this.empresaSeleccionada.CompanyID !== undefined) {
      const today = new Date();
      const expDate = new Date(today);
      expDate.setDate(today.getDate() - 1); // Subtract one day
      const formattedExpDate = expDate.toISOString().split('T')[0]; // Formatear la fecha como 'YYYY-MM-DD'

      this.usersService.updatePermiso(this.empresaSeleccionada.CompanyID, formattedExpDate).subscribe(
        response => {
          alert('Permiso cancelado correctamente');
          setTimeout(() => {
            window.location.reload();
          }, 100);
        },
        error => {
          console.error('Error al cancelar el permiso:', error);
          alert('Error al cancelar el permiso');
        }
      );
    }
  }
}
