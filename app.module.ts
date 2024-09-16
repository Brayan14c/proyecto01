import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';
import { ComunicationService } from './comunication.service';

@NgModule({
  declarations: [
    AppComponent
    // Elimina el componente UserProfileComponent si no lo tienes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    ComunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
