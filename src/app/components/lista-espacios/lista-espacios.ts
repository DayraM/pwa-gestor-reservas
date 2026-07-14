import { Component } from '@angular/core';
import { EspacioModel } from '../../models/espacio.model';
import { EspacioCard } from '../espacio-card/espacio-card';
import { ReservaForm } from '../reserva-form/reserva-form';

@Component({
  selector: 'app-lista-espacios',
  imports: [EspacioCard, ReservaForm],
  templateUrl: './lista-espacios.html',
  styleUrl: './lista-espacios.css',
})
export class ListaEspacios {
  espacios: EspacioModel[] = [
    {
      id: 1,
      nombre: 'Lab H-402',
      tipo: 'Laboratorio',
      capacidad: 30,
      disponible: true,
      // NUEVA PROPIEDAD: IMAGEN
      imagen: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      nombre: '205',
      tipo: 'Aula',
      capacidad: 40,
      disponible: true,
      imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      nombre: '101',
      tipo: 'Sala de Reuniones',
      capacidad: 12,
      disponible: false,
      imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      nombre: '210',
      tipo: 'Auditorio',
      capacidad: 100,
      disponible: true,
      imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=300&q=80'
    },
    // ESPACIO AGREGADO
    {
      id: 5,
      nombre: 'Laboratorio de Redes',
      tipo: 'Laboratorio',
      capacidad: 25,
      disponible: true,
      ubicacion: 'Bloque B - Piso 2',
      imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=300&q=80'
    }
  ]

  //MÉTODO PARA CONTAR LOS DISPONIBLES
  get cantidadDisponibles(): number {
    return this.espacios.filter(espacio => espacio.disponible).length;
  }

  espacioSeleccionado?: EspacioModel;

  seleccionarEspaco(espacio: EspacioModel): void {
    this.espacioSeleccionado = espacio;
  }
}
