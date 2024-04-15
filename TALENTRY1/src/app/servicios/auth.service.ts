import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public tokenService: TokenService, private router: Router) { }

  Login(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/login", user);
  }

  IsLogedIn(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get("http://127.0.0.1:8000/api/isLogedIn", { headers });
  }

  Registrar(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/registro", user);
  }

  RegistrarEmpresa(company:any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/registroEmpresa", company);
  }

  

  Logout(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.put("http://127.0.0.1:8000/api/logout", {}, { headers });
  }
}
