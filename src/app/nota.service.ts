import { Injectable } from '@angular/core';
import { Nota } from './nota';
import { NOTAS } from './mock-notas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor() { }

  getNotas(): Observable<Nota[]> {
    return of(NOTAS);
  }

  getNota(id: number): Observable<Nota> {
    return of(NOTAS.find(nota => nota.id === id));
  }


}
