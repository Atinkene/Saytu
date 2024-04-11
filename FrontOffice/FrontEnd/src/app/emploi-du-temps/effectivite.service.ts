// effectivite.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EffectiviteService {
  private updateStatusUrl = 'http://localhost:3000/effectivite/update-status';

  constructor(private http: HttpClient) {}

  markAsDone(jour: string, heure: string): Observable<void> {
    return this.http.post<void>(this.updateStatusUrl, { jour, heure });
  }
}
