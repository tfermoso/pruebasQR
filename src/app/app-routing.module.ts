import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from"@angular/router";
import { LandingAsistirComponent } from './landing-asistir/landing-asistir.component';
import { AppComponent } from './app.component';
import { AttendentListComponent } from './attendent-list/attendent-list.component';

const routes:Routes= [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AttendentListComponent },
  { path: 'landing/:id', component: LandingAsistirComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
