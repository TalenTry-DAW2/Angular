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
import { EntrevistaCategoriasComponent } from './entrevista-categorias/entrevista-categorias.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionCategoriasComponent } from './gestion-categorias/gestion-categorias.component';
import { GestionQaComponent } from './gestion-qa/gestion-qa.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { InfotestCategoriaComponent } from './infotest-categoria/infotest-categoria.component';
import { TestEntrevistaComponent } from './test-entrevista/test-entrevista.component';

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
    TestEntrevistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
