import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class AppService {
    employeeList: AngularFireList<any>;
    constructor(private firebase: AngularFireDatabase) { }

    getData() {
        this.employeeList = this.firebase.list('activities');
        return this.employeeList;
    }
}
