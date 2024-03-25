import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  private readonly TOKEN_KEY = 'auth_token';

  getToken(): string | null {
    console.log(localStorage.getItem(this.TOKEN_KEY))
    return localStorage.getItem(this.TOKEN_KEY) || null;
  }
  getRole(): any {
    // token de sesion
    const authToken = this.getToken();
    // header con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get("http://127.0.0.1:8000/api/get-role", { headers });
  }

  setToken(token: any): void {
    localStorage.setItem(this.TOKEN_KEY, token.access_token);
    /*const tokenString = token.access_token.split('|')[1];
    localStorage.setItem(this.TOKEN_KEY, tokenString);*/
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
