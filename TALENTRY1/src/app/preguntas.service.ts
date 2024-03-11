import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private apiUrl = '...'; // URL de tu API o ruta al archivo JSON de preguntas

  constructor(private http: HttpClient) { }

  getPreguntas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
