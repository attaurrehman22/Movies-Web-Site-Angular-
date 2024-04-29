import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-freetowatchcomponent',
  templateUrl: './freetowatchcomponent.component.html',
  styleUrls: ['./freetowatchcomponent.component.css']
})
export class FreetowatchcomponentComponent {
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
    watchOption: any = 'movies'; 

    watchBackground(option: any) {
      this.watchOption = option;
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
    }


}
