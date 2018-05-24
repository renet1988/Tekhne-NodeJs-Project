import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotaDetailComponent } from './nota-detail/nota-detail.component';
import { NotaEditComponent } from './nota-edit/nota-edit.component';
import { NotaAddComponent } from './nota-add/nota-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: NotaDetailComponent },
  { path: 'edit/:id', component: NotaEditComponent },
  { path: 'add', component: NotaAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
