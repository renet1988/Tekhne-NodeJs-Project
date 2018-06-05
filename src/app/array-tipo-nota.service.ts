import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TIPONOTA } from './arrayTipoNota';
import { TipoNota } from './TipoNota';

@Injectable({
  providedIn: 'root'
})
export class ArrayTipoNotaService {

  constructor() { }

  getTipoNotas(): Observable<TipoNota[]> {
    return of(TIPONOTA);
  }

  getTipoNota(tnota: String): Observable<TipoNota> {
    return of(TIPONOTA.find(aux => aux.tipoNota === tnota));
  }
}
