import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-whatspopularcomponent',
  templateUrl: './whatspopularcomponent.component.html',
  styleUrls: ['./whatspopularcomponent.component.css']
})
export class WhatspopularcomponentComponent {

  constructor(private service:ServiceService)
  {
 
  }

  resultoftrendingmovies:any=[];

  ngAfterViewInit() {
    this.trendingData();
  }

  trendingData(){

    this.service.trendingMoviesApiData().subscribe((result)=>{
      this.resultoftrendingmovies=result.results;
    })

  }

}
