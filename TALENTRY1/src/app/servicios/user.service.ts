import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient, public tokenService: TokenService,) { }

  getUser(): any {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get("http://127.0.0.1:8000/api/user/self", { headers });
  }

  EditarUsuario(formulario: any) {
    console.log(formulario.email);
    var email = formulario?.email;
    var phone = formulario?.telefono;
    var password = formulario?.password;
    var params = new HttpParams();
      // Add parameters if they are not null or undefined
  if (email !== null && email !== undefined) {
    params = params.set('email', String(email));
  }
  if (phone !== null && phone !== undefined) {
    params = params.set('phone', String(phone));
  }
  if (password !== null && password !== undefined) {
    params = params.set('password', String(password));
  }
     // token de sesion
     const authToken = this.tokenService.getToken();
     // header con el token
     const headers = new HttpHeaders({
       Authorization: `Bearer ${authToken}`,
     });
     return this.http.get("http://127.0.0.1:8000/api/user/update", {params, headers });
  }

  EditarPrivacidad() {
     // token de sesion
     const authToken = this.tokenService.getToken();
     // header con el token
     const headers = new HttpHeaders({
       Authorization: `Bearer ${authToken}`,
     });
     return this.http.get("http://127.0.0.1:8000/api/user/private", {headers });
  }
}
