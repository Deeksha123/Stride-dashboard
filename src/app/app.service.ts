import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  fetchDashboardData( successHandler ) {
    this.http.get('http://localhost:3100/data/dashboard').subscribe(
      (data) => {
        successHandler( JSON.parse(data["_body"]) );
      },
      (err) => {
        console.log("error occurred in fetching data", err);
      }
    )
  }

}
