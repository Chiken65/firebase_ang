import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // users: Observable<any[]>;
  users: any;
  startDate = new Date();
  endDate = new Date();
  activities: any = [];
  j: any = 0;
  activities_det: any = [];
  constructor(public db: AngularFirestore, public service: AppService) {
    this.users = db.collection('users').valueChanges();
    const user_det = JSON.stringify(this.users);
    this.activities = db.collection('activities').valueChanges();
    this.activities.forEach(doc => {
      doc.forEach(element => {
        console.log(element);
        this.activities_det.push(element);
      });
    });
    console.log('123456', this.activities_det, this.activities_det.lenght);
  }

  ngOnInit() {
    console.log('called');
  }

  getvalue(value) {
    console.log(value);
    if (value.name === 'Rohit') {
      this.j++;
    }
    console.log(this.j);
  }
}
