import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  dashboardData = "";
  processingData = "";
  successData = "";
  queuedData = "";

  ngOnInit() {
    var self = this;
    this.appService.fetchDashboardData(function( data ) {
      self.dashboardData = data;
      
      for(let i of self.dashboardData) {
        console.log(i)
        if( i["status"] == "processing" )
          self.processingData = i["documents"];
        else if( i["status"] == "success" )
          self.successData = i["documents"];
              else if( i["status"] == "queued" )
                self.queuedData = i["documents"];
      }

    });
  }

  processingBatch() {
    
  }

  successBatch() {

  }

  queuedBatch() {

  }

}
