import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QA } from 'src/models/QA';
import { Record } from 'src/models/Record';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, public tokenService: TokenService) { }

  getUser(): any {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get(`${this.apiUrl}user/self`, { headers });
  }

  EditarUsuario(formulario: any) {
    var email = formulario?.email;
    var phone = formulario?.telefono;
    var password = formulario?.password;
    var photo = formulario?.photo;
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
    if (photo !== null && photo !== undefined) {
      params = params.set('photo', String(photo)); 
    }
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    
    return this.http.post(`${this.apiUrl}user/update`,params, { headers });
  }

  EditarPrivacidad() {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get(`${this.apiUrl}user/private`, { headers });
  }

  CargarEntrevistas(): Observable<Record[][]> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get<Record[][]>(`${this.apiUrl}record`, { headers });
  }

  CargarRespuestas(id:number): Observable<QA[][]> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get<QA[][]>(`${this.apiUrl}QA/${id}`, { headers });
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

    return this.http.post<any>(`${this.apiUrl}share/store`, requestData, { headers });
  }
  updatePermiso(companyID: number, expiredDate: String): Observable<any> {
    const authToken = this.tokenService.getToken(); 
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });

    const requestData = {
      CompanyID: companyID,
      ExpiredDate: expiredDate
    };
    return this.http.put<any>(`${this.apiUrl}share/update`, requestData, { headers });
  }
}


