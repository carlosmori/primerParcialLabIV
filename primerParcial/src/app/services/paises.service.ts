import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  listCountries$ = this.http.get<Pais[]>('https://api.mocki.io/v1/70f1d78a');
}
