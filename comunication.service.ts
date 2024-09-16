// comunication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  private apiUrl = 'https://pokeapi.co/api/v2/ability'; // Endpoint para obtener habilidades

  constructor(private http: HttpClient) { }

  apiPokemon(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
