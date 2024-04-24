import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {  Observable, of } from "rxjs";
import { PreguntasRespuestas } from "src/models/PreguntasRespuestas";
import { TokenService } from "./token.service";
import { Respuestas } from "src/models/Respuestas";

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  MostrarCategoria(): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    //peticion con headers de actualizacion
    return this.http.get("http://127.0.0.1:8000/api/category", { headers });
  }

  obtenerPreguntasYRespuestas(categoriaId: number, cantidad: number): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    let params = new HttpParams()
      .set('id', categoriaId.toString())
      .set('cantidad', cantidad.toString());
    this.setPosicion(0);
    return this.http.get<any>("http://127.0.0.1:8000/api/question/getFromCategory", { params: params, headers });
  }

  //guarda las preguntas y respuestas de esta entrevista
  setQA(qaPairs: PreguntasRespuestas[]): void {
    // Convert the array to a JSON string
    const qaPairsJSON = JSON.stringify(qaPairs);

    // Save the JSON string in local storage
    localStorage.setItem('qaPairs', qaPairsJSON);
  }

  getQA(): Observable<PreguntasRespuestas[]> {
    const qaPairsJSON = localStorage.getItem('qaPairs');

    if (qaPairsJSON) {
      // Parse the JSON string into an array of QA objects
      const qaPairs: PreguntasRespuestas[] = JSON.parse(qaPairsJSON);
      return of(qaPairs); // Wrap the array in an observable and return
    } else {
      return of([]); // Return an empty array wrapped in an observable if no QA pairs are found in local storage
    }
  }
  getQALength(): number {
    const qaPairsJSON = localStorage.getItem('qaPairs');

    if (qaPairsJSON) {
      // Parse the JSON string into an array of QA objects
      const qaPairs: PreguntasRespuestas[] = JSON.parse(qaPairsJSON);
      return qaPairs.length; // Wrap the array in an observable and return
    } else {
      return 0; // Return an empty array wrapped in an observable if no QA pairs are found in local storage
    }
  }

  setPosicion(posicion: number): void {
    // Convert the array to a JSON string
    const posicionString = JSON.stringify(posicion);

    // Save the JSON string in local storage
    localStorage.setItem('posicion', posicionString);
  }

  getPosicion(): number {
    const posicionStr = localStorage.getItem('posicion');
    if (posicionStr) {
      const posicion = parseInt(posicionStr, 10);
      return isNaN(posicion) ? 0 : posicion; // Ensure it's a valid number, return 0 if not
    } else {
      return 0; // Return 0 if no position is found in local storage
    }
  }

  //pregunta seleccionada y tal
  setSeleccionadas(RespuestasPairs: Respuestas[]): void {
    // Convert the array to a JSON string
    const RespuestasPairsJSON = JSON.stringify(RespuestasPairs);

    // Save the JSON string in local storage
    localStorage.setItem('RespuestasPairs', RespuestasPairsJSON);
  }

  getSeleccionadas(): Observable<Respuestas[]> {
    const RespuestasPairsJSON = localStorage.getItem('RespuestasPairs');

    if (RespuestasPairsJSON) {
      // Parse the JSON string into an array of QA objects
      const RespuestasPairs: Respuestas[] = JSON.parse(RespuestasPairsJSON);
      return of(RespuestasPairs); // Wrap the array in an observable and return
    } else {
      return of([]); // Return an empty array wrapped in an observable if no QA pairs are found in local storage
    }
  }

}