import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEspacios } from './components/lista-espacios/lista-espacios';
import { ResumenReserva } from './components/resumen-reserva/resumen-reserva';

@Component({
  selector: 'app-root',
  imports: [ListaEspacios, ResumenReserva],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab3');
}
