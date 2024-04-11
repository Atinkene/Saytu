// upplanning.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpplanningService {
  private apiUrl = 'http://localhost:3000/upplanning'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  updateUpplanning(className: string, jour: string, heure: string, upplanningData: any): Observable<any> {
    const url = `${this.apiUrl}/${className}/${jour}/${heure}`;
    return this.http.put(url, upplanningData);
  }
}
