import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://127.0.0.1:8000/api/contactos';

  constructor(private http: HttpClient) { }

  enviarMensaje(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos)
      .pipe(
        catchError(error => {
          return throwError('Error al enviar el mensaje.');
        })
      );
  }
}
