import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { EntrevistaCategoriasComponent } from './entrevista/entrevista-categorias/entrevista-categorias.component';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { PantallaEmpresaComponent } from './pantalla-empresa/pantalla-empresa.component';
import { GestionCategoriasComponent } from './pantalla-admin/gestion-categorias/gestion-categorias.component';
import { GestionUsuariosComponent } from './pantalla-admin/gestion-usuarios/gestion-usuarios.component';
import { GestionQaComponent } from './pantalla-admin/gestion-qa/gestion-qa.component';
import { EstadisticasComponent } from './pantalla-empresa/estadisticas/estadisticas.component';
import { InfotestCategoriaComponent } from './entrevista/infotest-categoria/infotest-categoria.component';
import { TestEntrevistaComponent } from './entrevista/test-entrevista/test-entrevista.component';
import { ResultadosEntrevistaComponent } from './entrevista/resultados-entrevista/resultados-entrevista.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: '',
    redirectTo: '/pagina-principal',
    pathMatch: 'full'
  },


  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'infotest/:categoryName', component: InfotestCategoriaComponent },
  {
    path: 'pagina-admin', component: PantallaAdminComponent,
    children: [
      { path: 'gestion-usuarios', component: GestionUsuariosComponent },
      { path: 'gestion-categorias', component: GestionCategoriasComponent },
      { path: 'gestion-qa', component: GestionQaComponent },
      { path: 'estadisticas', component: EstadisticasComponent },
      // Añade aquí más rutas hijas según sea necesario
    ]
  },
  { path: 'perfil', component: PerfilComponent },

  { path: 'pagina-empresa', component: PantallaEmpresaComponent },
  { path: 'categorias', component: EntrevistaCategoriasComponent },

  { path: 'test-entrevista/:length', component: TestEntrevistaComponent },
  { path: 'resultados-entrevista', component: ResultadosEntrevistaComponent },

  { path: 'error', component: ErrorComponent }, // Global error route
  { path: '**', redirectTo: 'error' }, // Capture all unmatched paths globally
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
