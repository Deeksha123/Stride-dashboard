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

  ngOnInit() {
    this.appService.fetchDashboardData(function( data ) {
      console.log("data found",data);
    });
  }

  processingBatch() {

  }

  successBatch() {

  }

  queuedBatch() {

  }

}
