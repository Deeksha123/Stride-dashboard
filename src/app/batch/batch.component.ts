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
  selectedDashData = "";
  showProcessingData = false;
  showSuccessData = false;
  showQueuedData = false;

  ngOnInit() {
    var self = this;
    this.appService.fetchDashboardData(function( data ) {
      self.dashboardData = data;
      
      for(let i of self.dashboardData) {
        if( i["status"] == "processing" )
          self.processingData = i["documents"];
        else if( i["status"] == "success" )
          self.successData = i["documents"];
              else if( i["status"] == "queued" )
                self.queuedData = i["documents"];
      }
      self.showProcessingData = true;
      console.log("self.processingData", self.processingData, self.successData, self.queuedData);

    });
  }

  processingBatch() {
    this.selectedDashData = "";
    this.showProcessingData = true;
    this.showSuccessData = false;
    this.showQueuedData = false;
    this.selectedDashData = this.processingData;
  }

  successBatch() {
    this.selectedDashData = "";
    this.showProcessingData = false;
    this.showSuccessData = true;
    this.showQueuedData = false;
    this.selectedDashData = this.successData;
  }

  queuedBatch() {
    this.selectedDashData = "";
    this.showProcessingData = false;
    this.showSuccessData = false;
    this.showQueuedData = true;
    this.selectedDashData = this.queuedData;
  }

}
