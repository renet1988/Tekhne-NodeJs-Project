import { Nota } from './nota';
import { TIPONOTA } from './arrayTipoNota';

export const NOTAS: Nota[] = [
  { id: 1 , name: 'name1', body: 'El cuerpo de la nota 1', date: new Date('10/10/2001') , tiponota: {tipoNota: 'Recordatorio'}},
  { id: 2 , name: 'name2', body: 'El cuerpo de la nota 2', date: new Date('01/01/2002') , tiponota: {tipoNota: 'Cumpleanios'}},
  { id: 3 , name: 'name3', body: 'El cuerpo de la nota 3', date: new Date('04/04/2008') , tiponota: {tipoNota: 'Recordatorio'}},
  { id: 4 , name: 'name4', body: 'El cuerpo de la nota 4', date: new Date('11/20/2016') , tiponota: {tipoNota: 'Cita'}},
  { id: 5 , name: 'name5', body: 'El cuerpo de la nota 5', date: new Date('06/02/2012') , tiponota: {tipoNota: 'Cumpleanios'}},
  { id: 6 , name: 'name6', body: 'El cuerpo de la nota 6', date: new Date('04/10/2010') , tiponota: {tipoNota: 'Recordatorio'}},
  { id: 7 , name: 'name7', body: 'El cuerpo de la nota 7', date: new Date('02/19/2009') , tiponota: {tipoNota: 'Cumpleanios'}},
  { id: 8 , name: 'name8', body: 'El cuerpo de la nota 8', date: new Date('03/15/2014') , tiponota: {tipoNota: 'Cumpleanios'}},
  { id: 9 , name: 'name9', body: 'El cuerpo de la nota 9', date: new Date('05/18/2017') , tiponota: {tipoNota: 'Cita'}}
];
