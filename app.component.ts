// app.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { ComunicationService } from './comunication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Login';
  loginForm: FormGroup;
  isAuthenticated = false;
  abilities: string[] = [];

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private comunication: ComunicationService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]], // Solo letras y números
      password: ['', [Validators.required, Validators.minLength(6)]] // Contraseña mínima de 6 caracteres
    });
  }

  ngOnInit(): void {
    this.pokemon();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(isValid => {
        if (isValid) {
          this.isAuthenticated = true;
          this.title = 'Welcome'; // Cambia el título a algo más apropiado para la vista principal
        } else {
          alert('Credenciales no válidas');
        }
      });
    }
  }

  logout(): void {
    this.pokemon();
    this.isAuthenticated = false;
    this.loginForm.reset();
    this.title = 'Login';
  }

  pokemon() {
    this.comunication.apiPokemon().subscribe(data => {
      this.abilities = data.results.slice(0, 10).map((ability: any) => ability.name);
    });
    
    this.comunication.apiPokemon().subscribe((data) => {
      console.log('Datos recibidos:', data);
      if (data && data.results) {
        // Extraer nombres de habilidades
        this.abilities = data.results.map((ability: any) => ability.name); // Ajusta según la estructura real de la API
      } else {
        this.abilities = ['Sin habilidades'];
      }
    }, (error) => {
      console.error('Error al recibir datos:', error);
      this.abilities = ['Error al cargar habilidades'];
    });
  }
  
}

