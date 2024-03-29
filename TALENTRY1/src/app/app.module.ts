import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { PantallaEmpresaComponent } from './pantalla-empresa/pantalla-empresa.component';
import { EntrevistaCategoriasComponent } from './entrevista/entrevista-categorias/entrevista-categorias.component';
import { GestionUsuariosComponent } from './pantalla-admin/gestion-usuarios/gestion-usuarios.component';
import { GestionCategoriasComponent } from './pantalla-admin/gestion-categorias/gestion-categorias.component';
import { GestionQaComponent } from './pantalla-admin/gestion-qa/gestion-qa.component';
import { EstadisticasComponent } from './pantalla-empresa/estadisticas/estadisticas.component';
import { InfotestCategoriaComponent } from './entrevista/infotest-categoria/infotest-categoria.component';
import { TestEntrevistaComponent } from './entrevista/test-entrevista/test-entrevista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { ResultadosEntrevistaComponent } from './entrevista/resultados-entrevista/resultados-entrevista.component';

import { PerfilComponent } from './perfil/perfil.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    PaginaPrincipalComponent,
    NavbarComponent,
    PantallaAdminComponent,
    PantallaEmpresaComponent,
    EntrevistaCategoriasComponent,
    EntrevistaCategoriasComponent,
    GestionUsuariosComponent,
    GestionCategoriasComponent,
    GestionQaComponent,
    EstadisticasComponent,
    InfotestCategoriaComponent,
    TestEntrevistaComponent,
    ResultadosEntrevistaComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
