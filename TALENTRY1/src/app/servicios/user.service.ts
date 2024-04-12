import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/models/Answer';
import { QA } from 'src/models/QA';
import { Record } from 'src/models/Record';
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
    console.log (params.get(password))
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get("http://127.0.0.1:8000/api/user/update", { params, headers });
  }

  EditarPrivacidad() {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get("http://127.0.0.1:8000/api/user/private", { headers });
  }

  CargarEntrevistas(): Observable<Record[][]> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get<Record[][]>("http://127.0.0.1:8000/api/record", { headers });
  }

  CargarRespuestas(id:number): Observable<QA[][]> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get<QA[][]>(`http://127.0.0.1:8000/api/QA/${id}`, { headers });
  }


  confirmarPermiso(companyID: number, expiredDate: String): Observable<any> {
    const authToken = this.tokenService.getToken(); 
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });

    const requestData = {
      CompanyID: companyID,
      ExpiredDate: expiredDate
    };

    return this.http.post<any>('http://127.0.0.1:8000/api/share/store', requestData, { headers });
  }
}


