import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, public tokenService: TokenService, private router: Router) { }

  Login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, user);
  }

  IsLogedIn(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get(`${this.apiUrl}isLogedIn`, { headers });
  }

  Registrar(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}registro`, user);
  }

  RegistrarEmpresa(company:any): Observable<any> {
    return this.http.post(`${this.apiUrl}registroEmpresa`, company);
  }

  

  Logout(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.put(`${this.apiUrl}logout`, {}, { headers });
  }
}
