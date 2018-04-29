import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AttendentListComponent } from './attendent-list/attendent-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingAsistirComponent } from './landing-asistir/landing-asistir.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    AttendentListComponent,
    LandingAsistirComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
