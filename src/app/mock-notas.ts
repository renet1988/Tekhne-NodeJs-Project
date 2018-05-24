import { Nota } from './nota';

enum tipoNota {
  reco = 'Recordatorio',
  cump = 'Cumpleanios',
  cita = 'Cita'
}

export const NOTAS: Nota[] = [
  { id: 1, tNota: tipoNota.reco , name: 'name1', body: 'El cuerpo de la nota 1', date: new Date('10/10/2001') },
  { id: 2, tNota: tipoNota.cump , name: 'name2', body: 'El cuerpo de la nota 2', date: new Date('01/01/2002') },
  { id: 3, tNota: tipoNota.cita , name: 'name3', body: 'El cuerpo de la nota 3', date: new Date('04/04/2008') },
  { id: 4, tNota: tipoNota.cita , name: 'name4', body: 'El cuerpo de la nota 4', date: new Date('11/20/2016') },
  { id: 5, tNota: tipoNota.cump , name: 'name5', body: 'El cuerpo de la nota 5', date: new Date('06/02/2012') },
  { id: 6, tNota: tipoNota.reco , name: 'name6', body: 'El cuerpo de la nota 6', date: new Date('04/10/2010') },
  { id: 7, tNota: tipoNota.reco , name: 'name7', body: 'El cuerpo de la nota 7', date: new Date('02/19/2009') },
  { id: 8, tNota: tipoNota.cump , name: 'name8', body: 'El cuerpo de la nota 8', date: new Date('03/15/2014') },
  { id: 9, tNota: tipoNota.reco , name: 'name9', body: 'El cuerpo de la nota 9', date: new Date('05/18/2017') },
  { id: 10, tNota: tipoNota.cita , name: 'name10', body: 'El cuerpo de la nota 10', date: new Date('07/12/2015') },
  { id: 11, tNota: tipoNota.reco , name: 'name11', body: 'El cuerpo de la nota 11', date: new Date('08/05/2011') }
];
