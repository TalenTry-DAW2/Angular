import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ErrorComponent } from './error/error.component';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { PantallaEmpresaComponent } from './pantalla-empresa/pantalla-empresa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
    
      { path: 'pagina-principal', component: PaginaPrincipalComponent },
      { path: 'pagina-admin', component: PantallaAdminComponent, pathMatch: 'full' },
      { path: 'pagina-empresa', component: PantallaEmpresaComponent, pathMatch: 'full' },

      { path: '**', redirectTo: 'error' } // Capture unmatched paths in 'app'
    
  ,
  

  { path: 'error', component: ErrorComponent, pathMatch: 'full' }, // Global error route
  { path: '**', redirectTo: 'error' }, // Capture all unmatched paths globally
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
