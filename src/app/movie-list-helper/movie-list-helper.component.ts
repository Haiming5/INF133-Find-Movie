import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-list-helper',
  templateUrl: './movie-list-helper.component.html',
  styleUrls: ['./movie-list-helper.component.css']
})
export class MovieListHelperComponent implements OnInit {

  imageBaseURL: string = "https://image.tmdb.org/t/p/w185";
  @Input() movie: Movie;


  constructor(private router: Router, private movieService: MovieServiceService) { }

  ngOnInit(): void {}

  checkOutMovie(){
    // console.log("checkoutmovie() clicked");
    // console.log(this.movies);
    console.log(this.movie);
    this.router.navigate(['specificMovie']);
    this.movieService.chosenMovie = this.movie;
  }

}
