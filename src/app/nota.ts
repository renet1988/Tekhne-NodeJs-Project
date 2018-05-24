export class Nota {
  id: number;
  tNota: tipoNota;
  name: string;
  body: string;
  date: Date;
}

enum tipoNota {
  reco = 'Recordatorio',
  cump = 'Cumpleanios',
  cita = 'Cita'
}


