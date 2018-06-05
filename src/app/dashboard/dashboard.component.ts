import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  notas: Nota[] = [];

  constructor(private notaService: NotaService) { }

  ngOnInit() {
    this.getNotas();
  }

  getNotas(): void {
    this.notaService.getNotas()
      .subscribe(notas => this.notas = notas);
  }

  isReco(nota: Nota): boolean {
    if (nota.tiponota.tipoNota === 'Recordatorio') {
      return true;
    } else {
      return false;
    }
  }
  isCumple(nota: Nota): boolean {
    if (nota.tiponota.tipoNota === 'Cumpleanios') {
      return true;
    } else {
      return false;
    }
  }
  isCita(nota: Nota): boolean {
    if (nota.tiponota.tipoNota === 'Cita') {
      return true;
    } else {
      return false;
    }
  }
}
