import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Definir credenciales ficticias
  private credentials = {
    username: 'brayan',
    password: 'conde123'
  };

  constructor() { }

  // Método para validar credenciales
  login(username: string, password: string): Observable<boolean> {
    // Simular una llamada al backend
    return of(username === this.credentials.username && password === this.credentials.password)
      .pipe(delay(1000)); // Simula un retraso de 1 segundo
  }
}

