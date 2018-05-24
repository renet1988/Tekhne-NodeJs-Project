import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-nota-detail',
  templateUrl: './nota-detail.component.html',
  styleUrls: [ './nota-detail.component.css' ]
})
export class NotaDetailComponent implements OnInit {
  @Input() nota: Nota;

  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getNota();
  }

  getNota(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.notaService.getNota(id)
      .subscribe(nota => this.nota = nota);
  }

  goBack(): void {
    this.location.back();
  }
}
