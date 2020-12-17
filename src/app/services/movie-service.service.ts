// This file is where you can get specific info about a movies. 
// Such as name, casting, rating

import { Injectable } from '@angular/core';
// import HttpClient so MovieServiceService can use it.
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import Observable, since that is what HttpClient returns, https://angular.io/guide/http for more info.
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';
import { Movie } from '../models/movie';



@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  baseURL:string = "https://api.themoviedb.org/3";
  constructor(private http: HttpClient) {}



  // Call search Url to get a movie
  getMovie(movieName:string):Observable<Movie[]> {
    movieName = encodeURIComponent(movieName);
    let searchUrl:string = `/search/movie?api_key=0a1ed8f16ba545aa32cf042f2f90ce59&language=en-US&query=${movieName}&page=1&include_adult=false`;
    return this.http.get<Movie[]>(this.baseURL+searchUrl);
  }


  // getLatestMovie() {
  //   var latestMovieURL:string = "https://api.themoviedb.org/3/movie/latest?api_key={put_api_key_here}&language=en-US";
  //   return this.http.get(latestMovieURL);
  // }

  

}
