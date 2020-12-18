import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  public movies: Movie[];
  public searchQuery:string;
  // basePosterURL: string = "https://image.tmdb.org/t/p/";
  // movieChosen: boolean = false;

  movie: Movie;
  imageBaseURL: string = "https://image.tmdb.org/t/p/w185";
  // @Input() movieChosen: boolean = false; 


  constructor(private router: Router, private movieService: MovieServiceService) {}
  ngOnInit(): void {}


  search() {
    this.movieService.getMovie(this.searchQuery).subscribe(data => this.movies = data["results"]);
  }
  

  // checkOutMovie(){
  //   console.log("checkoutmovie() clicked");
  //   // console.log(this.movies);
  //   console.log(this.movie);
  //   // this.router.navigate(['specificMovie']);
  //   // this.movieChosen = true; 
  // }

}
