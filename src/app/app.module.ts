import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotaDetailComponent } from './nota-detail/nota-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { NotaEditComponent } from './nota-edit/nota-edit.component';
import { NotaAddComponent } from './nota-add/nota-add.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NotaDetailComponent,
    NotaEditComponent,
    NotaAddComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
