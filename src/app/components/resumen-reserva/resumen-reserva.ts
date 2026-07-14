import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva-service';

@Component({
  selector: 'app-resumen-reserva',
  imports: [AsyncPipe],
  templateUrl: './resumen-reserva.html',
  styleUrl: './resumen-reserva.css',
})
export class ResumenReserva {
  reserva$;

  constructor(private reservaService: ReservaService){
    this.reserva$ = this.reservaService.reservaActual$;
  }

  cancelarReserva(): void {
    this.reservaService.limpiarReserva();
  }
}
