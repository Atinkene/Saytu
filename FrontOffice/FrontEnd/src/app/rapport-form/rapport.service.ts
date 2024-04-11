import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rapport } from './models/rapport.model';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  private apiUrl = 'http://localhost:3000/create-rapport'; // Assurez-vous que cette URL correspond à l'endpoint de votre API

  constructor(private http: HttpClient) { }

  createRapport(contenu: string): Observable<Rapport> {
    return this.http.post<Rapport>(this.apiUrl, { contenu });
  }
}
