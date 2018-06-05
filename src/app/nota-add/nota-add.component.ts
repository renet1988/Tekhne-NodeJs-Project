import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';
@Component({
  selector: 'app-nota-add',
  templateUrl: './nota-add.component.html',
  styleUrls: ['./nota-add.component.css']
})
export class NotaAddComponent implements OnInit {

  @Input() nota: Nota;

  nueva: Nota;
  idN: number;
  tNotaN: '';
  nameN: '';
  bodyN: '';

  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.nueva.id = this.idN;
    this.nueva.name = this.nameN;
    this.nueva.body = this.bodyN;
  }

}
