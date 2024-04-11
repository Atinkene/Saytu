// pv.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pv } from './models/pv.model';

@Injectable({
  providedIn: 'root'
})
export class PvService {
  private readonly baseUrl = 'http://localhost:3000/read-pv';

  constructor(private readonly http: HttpClient) {}

  getAllPv(): Observable<Pv[]> {
    return this.http.get<Pv[]>(this.baseUrl);
  }
}
