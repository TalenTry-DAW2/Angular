import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'app',
    children: [
      { path: 'pantalla-principal', component: PaginaPrincipalComponent },
      // No additional 'error' route here since 'error' will be globally accessible
      { path: '**', redirectTo: 'error' } // Capture unmatched paths in 'app'
    ]
  },
  { path: 'error', component: ErrorComponent, pathMatch: 'full' }, // Global error route
  { path: '**', redirectTo: 'error' } // Capture all unmatched paths globally
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
