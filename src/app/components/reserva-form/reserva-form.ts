import { Component, Input } from '@angular/core';
import { EspacioModel } from '../../models/espacio.model';
import { ReservaService } from '../../services/reserva-service';
import { FormsModule } from '@angular/forms';
import { IndexedDb } from '../../services/indexed-db';


@Component({
  selector: 'app-reserva-form',
  imports: [FormsModule],
  templateUrl: './reserva-form.html',
  styleUrl: './reserva-form.css',
})
export class ReservaForm {

  @Input() espacio!: EspacioModel;

  responsable = '';
  carrera = ''; // <-- NUEVO CAMPO AGREGADO
  fecha = '';
  hora = '';

  constructor(
    private reservaService: ReservaService,
    private db: IndexedDb
  ){}

  guardarReserva(): void{
    // LITERAL G: NUEVAS VALIDACIONES ESPECÍFICAS
    if(!this.fecha || !this.hora){
      alert('La fecha y la hora no pueden estar vacías.');
      return;
    }

    const nuevaReserva = {
      espacio: this.espacio.nombre,
      responsable: this.responsable,
      carrera: this.carrera,
      fecha: this.fecha,
      hora: this.hora,
      fechaRegistro: new Date().toISOString() // Fecha de creacion
    }

    // Se envia al servidor
    this.reservaService.registrarReserva(nuevaReserva);

    // Se guarda localmente
    this.db.guardarReserva(nuevaReserva);
    alert('Reserva guardada exitosamente')

    if(!this.responsable || this.responsable.length < 3){
      alert('El nombre del responsable debe tener al menos 3 caracteres.');
      return;
    }

    if(!this.carrera){
      alert('El campo de carrera es obligatorio.');
      return;
    }

    // SI PASA LAS VALIDACIONES, SE GUARDA LA RESERVA
    this.reservaService.registrarReserva({
      espacio: this.espacio.nombre,
      responsable: this.responsable,
      carrera: this.carrera, 
      fecha: this.fecha,
      hora: this.hora
    })

    this.responsable = '';
    this.carrera = ''; 
    this.fecha = '';
    this.hora = '';
  }

  limpiarFormulario(): void {
    this.responsable = '';
    this.carrera = '';
    this.fecha = '';
    this.hora = '';
  }
}



