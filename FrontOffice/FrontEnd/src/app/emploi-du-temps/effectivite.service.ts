import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EffectiviteService {
  private updateStatusUrl = 'http://localhost:3000/effectivite/update-status';

  constructor(private http: HttpClient) {}

  markAsDone(classe: string, jour: string, heure: string): Observable<void> {
    const url = `${this.updateStatusUrl}/${classe}`; // Mise à jour de l'URL pour inclure la classe
    return this.http.post<void>(url, { jour, heure });
  }
}
