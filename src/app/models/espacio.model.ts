export interface EspacioModel {
  id: number;
  nombre: string;
  tipo: string;
  capacidad: number;
  disponible: boolean;
  ubicacion?: string; 
  imagen?: string;
}

