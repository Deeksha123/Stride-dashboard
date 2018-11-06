import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

  dashboardJsonData = "";

  constructor(private http: Http) { }

  fetchDashboardData( successHandler ) {
    this.http.get('http://localhost:3100/dashboard').subscribe(
      (data) => {
        this.dashboardJsonData = JSON.parse(data["_body"])
        successHandler( this.dashboardJsonData );
      },
      (err) => {
        console.log("error occurred in fetching data", err);
      }
    )
  }

}
