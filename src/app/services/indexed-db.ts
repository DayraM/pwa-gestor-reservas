import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedDb {
  private dbName = 'ReservasDB';
  private dbVersion = 2;
  private db: IDBDatabase | null = null;

  constructor(){
    this.iniciarDB();
  }

  // Se crea la base de datos
  private iniciarDB(){
    const request = indexedDB.open(this.dbName, this.dbVersion);

    request.onupgradeneeded = (event: any ) => {
      this.db = event.target.result;

      //se crea la base de datos si no existe 
      if(!this.db?.objectStoreNames.contains('reservas')){
        this.db?.createObjectStore('reservas', { keyPath: 'id', autoIncrement: true});
      }
    };

    request.onsuccess = (event: any) =>{
      this.db = event.target.result;
      console.log('IndexedDB lista para usar');
    };

     request.onerror = (event: any) => {
      console.error('Error abriendo IndexedDB:', event.target.error);
    };
  }
  
  //guardar los datos de la reserva
  public guardarReserva(reserva: any){
    if(!this.db) return;
    const transaction = this.db.transaction(['reservas'], 'readwrite');
    const store = transaction.objectStore('reservas');
    store.add(reserva);
    console.log('Informacion guardada en IndexedDB:', reserva);

  }

  // leer todos los datos
  public obtenerTodasReservas(): Promise<any[]>{
    return new Promise((resolve, reject) => {
      if(!this.db){ resolve([]); return; }

      const transaction = this.db.transaction(['reservas'], 'readonly');
      const store = transaction.objectStore('reservas');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject('Error al leer los datos ')
    });
  }
}

