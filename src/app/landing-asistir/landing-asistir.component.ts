import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { StaticInjector } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-landing-asistir',
  templateUrl: './landing-asistir.component.html',
  styleUrls: ['./landing-asistir.component.css']
})
export class LandingAsistirComponent implements OnInit {
  id: string;
  user:any;
  nombre: string;
  asistir: boolean;
  Noasistir:boolean;
  database: AngularFireDatabase;
  QrCode:string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private db: AngularFireDatabase
  ) {
    this.database = db;
    this.asistir=false;
    this.Noasistir=false;
    this.QrCode="";

  }

  ngOnInit(): void {
    this.getToken();
    this.comprobarInvitacion();
  }
  comprobarInvitacion():void{
    this.id = this.route.snapshot.paramMap.get('id');
    
    //this.database.database.ref('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/invitaciones/' + this.id)
    this.database.object('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/seguimiento/' + this.id).snapshotChanges().subscribe(data=>{
        this.user=data.payload.val();
        if(this.user['confirmacion_asistencia']){
          this.mostrarCodigo();
        }
    });
    }
  
  getToken(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    //this.database.database.ref('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/invitaciones/' + this.id)
    this.database.object('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/invitaciones/' + this.id).snapshotChanges().subscribe(data => {
      if (data.payload.val()) {
        this.nombre = data.payload.val().name;
        var fecha = (new Date).toUTCString();
        this.database.object('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/seguimiento/' + this.id).update({ name:this.nombre,abierto:fecha});
        
      } else {
        this.nombre = "Usuario no encontrado";
      }

    });

  }
  mostrarCodigo():void{
    this.asistir=true;
    this.QrCode=this.id;
    
  }
  noAsistire():void{
    var fecha = (new Date).toUTCString();
    this.database.object('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/seguimiento/' + this.id).update({ confirmacion_no_asistencia:fecha});
    console.log(this.user);
    this.Noasistir=true;


  }

  Asistire():void{
    var fecha = (new Date).toUTCString();
    this.database.object('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/seguimiento/' + this.id).update({ confirmacion_asistencia:fecha});
    this.mostrarCodigo();
  }

}
