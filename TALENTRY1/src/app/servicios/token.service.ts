import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  private readonly TOKEN_KEY = 'auth_token';

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY) || null;
  }
  getRole(): any {
    // token de sesion
    const authToken = this.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get(`${this.apiUrl}user/get-role`, { headers });
  }

  setToken(token: any): void {
    localStorage.setItem(this.TOKEN_KEY, token.access_token);
  }

  removeToken(): boolean {
    try {
      localStorage.removeItem(this.TOKEN_KEY);
      return true;
    } catch (error) {
      return false;
    }
  }
}
