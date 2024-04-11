// avis.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from './models/avis.model';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = 'http://localhost:3000/avis'; // L'URL de votre endpoint Avis

  constructor(private http: HttpClient) { }

  getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.apiUrl);
  }

  createAvis(avisData: Avis): Observable<Avis> {
    return this.http.post<Avis>(this.apiUrl, avisData);
  }
}
