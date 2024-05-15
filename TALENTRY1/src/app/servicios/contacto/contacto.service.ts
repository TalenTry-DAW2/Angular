import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { TokenService } from '../token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, public tokenService: TokenService) { }

  getContactos(): any {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get(`${this.apiUrl}contactos`, { headers });
  }
  enviarContactos(data:any): any {
    // token de sesion
    const authToken = this.tokenService.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.post(`${this.apiUrl}contactos`,data, { headers });
  }
}
