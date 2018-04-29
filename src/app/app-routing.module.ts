import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from"@angular/router";
import { LandingAsistirComponent } from './landing-asistir/landing-asistir.component';
import { AppComponent } from './app.component';
import { AttendentListComponent } from './attendent-list/attendent-list.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes:Routes= [
  
  { path: '', component: PresentacionComponent },
  { path: 'landing/:id', component: LandingAsistirComponent },
  { path: "404", component: PresentacionComponent},
  { path: "**", redirectTo: "/404"},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
