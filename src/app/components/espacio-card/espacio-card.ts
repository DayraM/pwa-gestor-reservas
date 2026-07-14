import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EspacioModel } from '../../models/espacio.model';

@Component({
  selector: 'app-espacio-card',
  imports: [],
  templateUrl: './espacio-card.html',
  styleUrl: './espacio-card.css',
})
export class EspacioCard {
  @Input() espacio!: EspacioModel;

  @Output() espacioSeleccionado = new EventEmitter<EspacioModel>();

  seleccionar(): void {
    if(this.espacio.disponible){
      //Outout debe ser el espacio seleccionado
      this.espacioSeleccionado.emit(this.espacio);
    }
  }
}
