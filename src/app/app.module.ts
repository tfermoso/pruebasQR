import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AttendentListComponent } from './attendent-list/attendent-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingAsistirComponent } from './landing-asistir/landing-asistir.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendentListComponent,
    LandingAsistirComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
