import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { category } from "../../models/category";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  MostrarCategoria(): Observable<any>{
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`,
      });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/category", { headers });
}
}