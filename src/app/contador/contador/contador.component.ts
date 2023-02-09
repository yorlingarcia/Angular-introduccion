import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Mundo</h1>
    <h2>{{ titulo }}</h2>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <!-- colocar parentesis implica un evento -->
    <!-- <button (click)="numero = numero + 1">+1</button> -->
    <!-- <button (click)="sumar()">+1</button> -->
    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <!-- <button (click)="numero = numero - 1">-1</button> -->
    <!-- <button (click)="restar()">-1</button> -->
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;
  sumar() {
    this.numero++;
  }

  restar() {
    this.numero--;
  }

  acumular(valor: number) {
    this.numero += valor;
  }
}
