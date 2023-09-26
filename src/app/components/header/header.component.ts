import { Component,ViewChild,ElementRef,AfterViewInit  } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  title = 'tmdbproject';
 
  constructor(private service:ServiceService)
  {
 
  }

    resultoftrendingmovies:any=[];



  ngAfterViewInit() {
    if (this.dropdownRef) {
      this.dropdownRef.nativeElement.click();
    }
    this.trendingData();
  }

  trendingData(){

    this.service.trendingMoviesApiData().subscribe((result)=>{
      this.resultoftrendingmovies=result.results;
    })

  }


  dropdownOptions = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ];

  selectedOption: any;

  @ViewChild('dropdownRef', { static: false }) dropdownRef?: ElementRef;

  openDropdown() {
    // Programmatically open the dropdown options
    if (this.dropdownRef) {
      this.dropdownRef.nativeElement.click();
    }
  }

  onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
    console.log('Selected Option:', this.selectedOption);
  }


  isDropdownVisible = false;
  istvshowVisible = false;
  istvpeopleVisible = false;
  istmoreVisible = false;


  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

  showTV() {
    this.istvshowVisible = true;
  }

  hideTV() {
    this.istvshowVisible = false;
  }

  showPeople() {
    this.istvpeopleVisible = true;
  }

  hidePeople() {
    this.istvpeopleVisible = false;
  }

  showMore() {
    this.istmoreVisible = true;
  }

  hideMore() {
    this.istmoreVisible = false;
  }




  showSearchBox: boolean = false;

  toggleSearchBox(): void {
    this.showSearchBox = !this.showSearchBox;
  }


  backselectedOption: any = 'today'; 

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



  trailerOption: any = 'streaming'; 

  trailerBackground(option: any) {
    this.trailerOption = option;
  }


  popularOption: any = 'streaming'; 

  popularBackground(option: any) {
    this.popularOption = option;
  }


  watchOption: any = 'movies'; 

  watchBackground(option: any) {
    this.watchOption = option;
  }

}
