import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
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

  obtenerPreguntasCategoria(categoriaId: number): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    let params = new HttpParams()
      .set('id', categoriaId.toString());
    this.setPosicion(0);
    return this.http.get<any>("http://127.0.0.1:8000/api/question/getFromCategoryAll", { params: params, headers });
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


  setSeleccionada(RespuestaPair: Respuestas, index: number, QuestionID: any): void {
    // Retrieve the current array from local storage
    const RespuestasPairsJSON = localStorage.getItem('RespuestasPairs');
    let RespuestasPairs: Respuestas[] = [];

    if (RespuestasPairsJSON) {
      // Parse the JSON string back to an array
      RespuestasPairs = JSON.parse(RespuestasPairsJSON);
    }

    // Update or set the specific element at the desired index
    RespuestaPair.QuestionID = QuestionID;
    RespuestasPairs[index] = RespuestaPair;

    // Convert the updated array to a JSON string
    const updatedRespuestasPairsJSON = JSON.stringify(RespuestasPairs);

    // Save the updated JSON string back to local storage
    localStorage.setItem('RespuestasPairs', updatedRespuestasPairsJSON);
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

  GuardarEntrevistaRecord(parametros: any[]) {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    let startDate: Date = new Date(parametros[2]);
    let endDate: Date = new Date(parametros[3]);
    let params = new HttpParams()
      .set('CategoryID', parametros[0])
      .set('score', parametros[1])
      .set('StartDate', this.formatDateToBackend(startDate))
      .set('FinishDate', this.formatDateToBackend(endDate));
    return this.http.post("http://127.0.0.1:8000/api/record/store", params, { headers });
  }

  GuardarEntrevistaQA(parametros: any[], RecordID: number): Observable<any> {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    let startDate: Date = new Date(parametros[2]);
    let endDate: Date = new Date(parametros[3]);

    const params: any[] = [];

    // Iterate over each item in parametros array
    parametros.forEach((item) => {

      // Create an object to represent a single record (question and answer)
      const recordData = {
        RecordID: RecordID,
        QuestionID: item.QuestionID, // Assuming QuestionID is the correct property name
        score: item.puntuacion,
        answer: item.respuesta,
        StartDate: this.formatDateToBackend(new Date(item.FInicio)), // Assuming FInicio is the correct property name
        FinishDate: this.formatDateToBackend(new Date(item.FFinal)) // Assuming FFinal is the correct property name
      };
      // Add the recordData object to the requestBody array
      params.push(recordData);
    });
    return this.http.post("http://127.0.0.1:8000/api/QA/store", params, { headers });
  }

  formatDateToBackend(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

  EliminarEntrevista() {
    localStorage.removeItem('RespuestasPairs');
    localStorage.removeItem('qaPairs');
    localStorage.removeItem('posicion');
  }

}