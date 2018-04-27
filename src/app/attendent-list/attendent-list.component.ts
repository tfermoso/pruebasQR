import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-attendent-list',
  templateUrl: './attendent-list.component.html',
  styleUrls: ['./attendent-list.component.css']
})
export class AttendentListComponent implements OnInit {

  attendant:any[];

  constructor(db: AngularFireDatabase) {
    db.list('/IwV1feW9uyZVMPoyg42hwLAnTAZ2/Asistentes').snapshotChanges()
    .subscribe(attendant=>{
      this.attendant=attendant;
      console.log(this.attendant);
    })
    
   }

  ngOnInit() {
  }

}
