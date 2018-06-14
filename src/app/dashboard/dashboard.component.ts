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
}
