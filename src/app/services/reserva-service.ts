import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ReservaData{
  espacio: string,
  responsable: string,
  carrera: string,
  fecha: string,
  hora: string
}

@Injectable({
  providedIn: 'root',
})
export class ReservaService {

  private reservaSubject = new BehaviorSubject<ReservaData | null>(null);

  reservaActual$ = this.reservaSubject.asObservable();

  registrarReserva(reserva: ReservaData): void {
    this.reservaSubject.next(reserva);
  }

  limpiarReserva(): void {
    this.reservaSubject.next(null);
  }
}
