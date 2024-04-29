import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';



@Component({
  selector: 'app-trendingandfreetowatch',
  templateUrl: './trendingandfreetowatch.component.html',
  styleUrls: ['./trendingandfreetowatch.component.css']
})
export class TrendingandfreetowatchComponent {
  constructor(private service:ServiceService)
  {
 
  }

    resultoftrendingmovies:any=[];
    backselectedOption: any = 'today'; 

    ngAfterViewInit() {
      this.trendingData();
    }
  
    trendingData(){
  
      this.service.trendingMoviesApiData().subscribe((result)=>{
        this.resultoftrendingmovies=result.results;
      })
  
    }

    changeBackground(option: any) {
      if(option==='today'){
        this.service.trendingMoviesApiData().subscribe((result)=>{
          this.resultoftrendingmovies=result.results;
          this.backselectedOption = option;
        })
      }
      else{
        this.service.lastweekMoviesApiData().subscribe((result)=>{
          console.warn("result of latest week",result)
          this.resultoftrendingmovies=result.results;
          this.backselectedOption = option;
        })
      }
      // console.warn("changebackground",option)
       //this.backselectedOption = option;
    }

}
