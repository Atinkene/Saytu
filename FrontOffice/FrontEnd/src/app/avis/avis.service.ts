// service dans Angular pour appeler l'API avis-read
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from './models/avis.model';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private avisUrl = 'http://localhost:3000/avis-read'; // Mettez votre URL correcte ici

  constructor(private http: HttpClient) {}

  getAvis(classe: string): Observable<Avis[]> {
    return this.http.get<Avis[]>(`${this.avisUrl}?class=${classe}`);
  }
}
