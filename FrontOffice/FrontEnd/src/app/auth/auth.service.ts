import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user'; // Importez le modèle User si nécessaire
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Remplacez ceci par l'URL de votre API Nest.js

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, { email, password });
  }
}


