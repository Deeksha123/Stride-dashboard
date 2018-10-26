import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Response, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { AppRoutingModule } from './/app-routing.module';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
