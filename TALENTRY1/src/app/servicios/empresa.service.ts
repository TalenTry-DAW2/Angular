import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  MostrarEmpresas(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/company", { headers });
  }
  getShare(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/share/show", { headers });
  }
  getCategory(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/category/", { headers });
  }

  addQuestion(preguntas: any): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.post("http://127.0.0.1:8000/api/answer/agregarPR", preguntas, { headers });
  }

  getUsuariosRegistrados(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/user/total", { headers });
  }
  getPorcentajeUsuariosEntrevista(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/user/totalPorcentajeEntrevista", { headers });
  }

  getPreguntas(id:number): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    let params = new HttpParams()
      .set('id', id);
    //peticion con headers de actualizacion
    return this.http.get(`http://127.0.0.1:8000/api/question/getFromCategoryAll`, { params, headers });
  }
}

