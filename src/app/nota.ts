import { TipoNota } from './TipoNota';

export class Nota {
  id: number;
  name: string;
  body: string;
  date: Date;
  tiponota: TipoNota;
}
