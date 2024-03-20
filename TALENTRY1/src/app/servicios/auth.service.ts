import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  Login(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/login", user);
  }
  Registrar(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/registro", user);
  }

  Logout(): Observable<any>{
      // token de sesion
      const authToken = this.tokenService.getToken();
      // header con el token
        const headers = new HttpHeaders({
          Authorization: `Bearer ${authToken}`,
        });
      //peticion con headers de actualizacion
      return this.http.post("http://127.0.0.1:8000/api/logout", { headers });
  }
}
