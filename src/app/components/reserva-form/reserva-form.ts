import { Component, Input, OnInit } from '@angular/core';
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
export class ReservaForm implements OnInit {
  @Input() espacio!: EspacioModel;

  responsable = '';
  carrera = '';
  fecha = '';
  hora = '';

  constructor(private reservaService: ReservaService, private db: IndexedDb) {}

  // 1. LEER DE LOCAL STORAGE AL INICIAR
  ngOnInit(): void {
    const nombreGuardado = localStorage.getItem('pref_responsable');
    const carreraGuardada = localStorage.getItem('pref_carrera');
    
    if (nombreGuardado) {
      this.responsable = nombreGuardado;
    }
    if (carreraGuardada) {
      this.carrera = carreraGuardada;
    }
  }

  guardarReserva(): void {
    if (!this.fecha || !this.hora) {
      alert('La fecha y la hora no pueden estar vacías.');
      return;
    }
    if (!this.responsable || this.responsable.length < 3) {
      alert('El nombre del responsable debe tener al menos 3 caracteres.');
      return;
    }
    if (!this.carrera) {
      alert('El campo de carrera es obligatorio.');
      return;
    }

    // 2. GUARDAR EN LOCAL STORAGE LAS PREFERENCIAS
    localStorage.setItem('pref_responsable', this.responsable);
    localStorage.setItem('pref_carrera', this.carrera);

    const nuevaReserva = {
      espacio: this.espacio.nombre,
      responsable: this.responsable,
      carrera: this.carrera,
      fecha: this.fecha,
      hora: this.hora,
      fechaRegistro: new Date().toISOString() // Añadí esto como buena práctica
    };

    this.reservaService.registrarReserva(nuevaReserva);

    this.db.guardarReserva(nuevaReserva);
    alert('Reserva guardada exitosamente');

    this.reservaService.registrarReserva({
      espacio: this.espacio.nombre,
      responsable: this.responsable,
      carrera: this.carrera,
      fecha: this.fecha,
      hora: this.hora
    });

    // Limpiamos solo fecha y hora, conservamos los datos del usuario
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