import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-landing-asistir',
  templateUrl: './landing-asistir.component.html',
  styleUrls: ['./landing-asistir.component.css']
})
export class LandingAsistirComponent implements OnInit {
  id:string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken():void{
    this.id = this.route.snapshot.paramMap.get('id');

  }

}
