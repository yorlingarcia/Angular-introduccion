import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent, // pagina que se quiere mostrar
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  exports: [MainPageComponent], // se debe exportar el componente para poder mostrarlo
})
export class DbzModule {}
