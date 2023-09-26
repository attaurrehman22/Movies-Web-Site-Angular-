import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {



 // This is just an example, replace with your actual property
  checkBoxValue: boolean = false;

  constructor(private service:ServiceService)
  {
 
  }

  ngOnInit(): void {
    this.changeBackground(); // Call the function after the component is initialized
  }

  sortdiv:boolean=false;
  sortdrop:boolean=false;
  wheretowatch:boolean=false;
  dropofwhere:boolean=false;
  filters:boolean=false;
   


sortClick(){
  if(this.sortdiv==false)
  {
    this.sortdiv=true
  }
  else{
     this.sortdiv=false
  }
  
}
sorDropdown(){
  if(this.sortdrop==false)
  {
    this.sortdrop=true
  }
  else{
     this.sortdrop=false
  }
}

whereDrop(){
  if(this.dropofwhere==false)
  {
    this.dropofwhere=true
  }
  else{
     this.dropofwhere=false
  }
}

whereClick(){
  if(this.wheretowatch==false)
  {
    this.wheretowatch=true
  }
  else{
     this.wheretowatch=false
  }
}






filterofClick(){
  if(this.filters==false)
  {
    this.filters=true
  }
  else{
     this.filters=false
  }
}


resultoftrendingmovies:any=[];
backselectedOption: any = 'thisWeek'; 

  changeBackground() {
   
      this.service.lastweekMoviesApiData().subscribe((result)=>{
        console.warn("result of latest week",result)
        this.resultoftrendingmovies=result.results;
        this.backselectedOption = this.backselectedOption;
      })
  }

}
