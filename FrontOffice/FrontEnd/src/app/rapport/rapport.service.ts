import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private http: HttpClient) { }

  getAllRapports() {
    return this.http.get<any[]>('http://localhost:3000/read-rapport');
  }
}
