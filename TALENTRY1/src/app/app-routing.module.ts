import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ErrorComponent } from './error/error.component';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { PantallaEmpresaComponent } from './pantalla-empresa/pantalla-empresa.component';
import { EntrevistaCategoriasComponent } from './entrevista-categorias/entrevista-categorias.component';
import { GestionCategoriasComponent } from './gestion-categorias/gestion-categorias.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionQaComponent } from './gestion-qa/gestion-qa.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { InfotestCategoriaComponent } from './infotest-categoria/infotest-categoria.component';
import { TestEntrevistaComponent } from './test-entrevista/test-entrevista.component';
import { ResultadosEntrevistaComponent } from './resultados-entrevista/resultados-entrevista.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
    
      { path: 'pagina-principal', component: PaginaPrincipalComponent },
      { path: 'infotest/:categoryName', component: InfotestCategoriaComponent },
      { 
        path: 'pantalla-admin', component: PantallaAdminComponent, 
        children: [
          { path: 'gestion-usuarios', component: GestionUsuariosComponent },
          { path: 'gestion-categorias', component: GestionCategoriasComponent },
          { path: 'gestion-qa', component: GestionQaComponent },
          { path: 'estadisticas', component: EstadisticasComponent },
          // Añade aquí más rutas hijas según sea necesario
        ]
      },
      { path: 'pagina-empresa', component: PantallaEmpresaComponent, pathMatch: 'full' },
      { path: 'categorias', component: EntrevistaCategoriasComponent, pathMatch: 'full' },

      { path: 'test-entrevista/:length', component: TestEntrevistaComponent },
      { path: 'resultados-entrevista', component: ResultadosEntrevistaComponent },

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
