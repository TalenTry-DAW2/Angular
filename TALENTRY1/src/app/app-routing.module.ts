import { NgModule } from '@angular/core';
import { AuthGuard } from './guard.guard';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ErrorAccesoComponent } from './error-acceso/error-acceso.component'; // Importa el componente ErrorAccesoComponent
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
import { EstadisticasAdminComponent } from './pantalla-admin/estadisticas/estadisticas.component';
import { InfotestCategoriaComponent } from './entrevista/infotest-categoria/infotest-categoria.component';
import { TestEntrevistaComponent } from './entrevista/test-entrevista/test-entrevista.component';
import { ResultadosEntrevistaComponent } from './entrevista/resultados-entrevista/resultados-entrevista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HistorialComponent } from './historial/historial.component';
import { GestionPreguntasComponent } from './pantalla-empresa/gestion-preguntas/gestion-preguntas.component';
import { PermisoEmpresaComponent } from './permiso-empresa/permiso-empresa.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliPrivComponent } from './poli-priv/poli-priv.component'; // Asegúrate de importar el componente
import { CondicionesComponent } from './condiciones/condiciones.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-empresa', component: RegistroEmpresaComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  {
    path: '',
    redirectTo: '/pagina-principal',
    pathMatch: 'full'
  },
  { path: 'contacto', component: ContactoComponent},
  { path: 'historial', component: HistorialComponent, canActivate: [AuthGuard] },
  { path: 'permiso-empresa', component: PermisoEmpresaComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'zona-empresa', component: PantallaEmpresaComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'gestion-preguntas', component: GestionPreguntasComponent, canActivate: [AuthGuard]},
      { path: 'estadisticas', component: EstadisticasComponent, canActivate: [AuthGuard]},
    ]
  },
  { path: 'entrevista/categorias', component: EntrevistaCategoriasComponent, canActivate: [AuthGuard]},
  { path: 'entrevista/pregunta', component: TestEntrevistaComponent, canActivate: [AuthGuard]},
  { path: 'entrevista/resultados', component: ResultadosEntrevistaComponent, canActivate: [AuthGuard]},
  { path: 'entrevista/info-categoria', component: InfotestCategoriaComponent, canActivate: [AuthGuard]},
  {
    path: 'zona-admin', component: PantallaAdminComponent, canActivate: [AuthGuard] ,
    children: [
      { path: 'gestion-usuarios', component: GestionUsuariosComponent, canActivate: [AuthGuard]},
      { path: 'gestion-categorias', component: GestionCategoriasComponent, canActivate: [AuthGuard]},
      { path: 'gestion-qa', component: GestionQaComponent, canActivate: [AuthGuard] },
      { path: 'estadisticas', component: EstadisticasAdminComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'condiciones', component: CondicionesComponent }, // Definición de la ruta para CondicionesComponent

  { path: 'poli-priv', component: PoliPrivComponent }, // Definición de la ruta para PoliPrivComponent

  { path: 'error-acceso', component: ErrorAccesoComponent }, // Ruta para el componente ErrorAccesoComponent

  { path: 'error', component: ErrorComponent }, // Global error route
  { path: '**', redirectTo: 'error' }, // Capture all unmatched paths globally
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
