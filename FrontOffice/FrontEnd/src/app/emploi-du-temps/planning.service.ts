// planning.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planning } from './models/planning.model';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private planningUrl = 'http://localhost:3000/planning';

  constructor(private http: HttpClient) {}

  getPlanningDataByClass(classValue: string): Observable<Planning[]> {
    const url = `${this.planningUrl}/${classValue}`;
    return this.http.get<Planning[]>(url);
  }
}
