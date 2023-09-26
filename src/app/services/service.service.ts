import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  trendingMoviesApiData():Observable<any>{    
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }


  lastweekMoviesApiData():Observable<any>{    
    return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`);
  }
}
