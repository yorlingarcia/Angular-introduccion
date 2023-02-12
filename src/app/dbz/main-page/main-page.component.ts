import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
// interface Personaje {
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2000,
  };
  // nuevo: Personaje = {
  //   nombre: '',
  //   poder: 0,
  // };
  // agregar(event: any) {
  //   event.preventDefault();
  //   console.log(event);
  // }
  // Usando el modulo FormsModule
  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  // agregar() {
  //   // console.log(this.nuevo);
  //   if (this.nuevo.nombre.trim().length === 0) {
  //     return;
  //   }constructor(private dbzService: DbzService) {}
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0,
  //   };
  // }
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }
  constructor(private dbzService: DbzService) {}
}
