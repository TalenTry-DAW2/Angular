import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { Category } from "../../models/category";

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  allUsers: any[] = [];

  constructor(private http: HttpClient) { }

  loadUsers() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/category/');
  }
}