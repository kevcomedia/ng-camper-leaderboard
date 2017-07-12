import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Camper } from './camper';

@Injectable()
export class Top100Service {
  constructor(private http: Http) { }

  getRecent(): Promise<Camper[]> {
    return this.getTop100('recent');
  }

  getAlltime(): Promise<Camper[]> {
    return this.getTop100('alltime');
  }

  private getTop100(set: string): Promise<Camper[]> {
    const baseUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
    return this.http.get(baseUrl + set)
      .toPromise()
      .then(response => response.json() as Camper[]);
      // TODO add proper error handler
  }
}
