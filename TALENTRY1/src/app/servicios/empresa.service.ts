import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  MostrarEmpresas(): Observable<any>{
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`,
      });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/company", { headers });
}
  getCategory(): Observable<any>{
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`,
      });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/category/", { headers });
  }

  addQuestion(preguntas:any): Observable<any>{
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`,
      });
      console.log(preguntas.answers)
      let params = new HttpParams() 
      .set('CategoryID', preguntas.CategoryID)
      .set('question', preguntas.question)
      .set('answers', preguntas.answers)
      .set('QuestionPoints', preguntas.QuestionPoints);
    //peticion con headers de actualizacion
    return this.http.post("http://127.0.0.1:8000/api/answer/agregarPR", { params: params,headers });
  }
}
