import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Posters } from '../models/posters';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-specific-movie',
  templateUrl: './specific-movie.component.html',
  styleUrls: ['./specific-movie.component.css']
})
export class SpecificMovieComponent implements OnInit {
  poster: string;
  imageBaseURL: string = "https://image.tmdb.org/t/p/w1280";
  completeURL: string ;
  showPic: boolean = false;


  movie: Movie;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movie = this.movieService.chosenMovie;
    // this.movieService.getNewPoster(this.movie.id).subscribe(data => this.posterArray = data["backdrops"]);
    // console.log("discover sth: ");
    console.log(this.movie);
  }

  posters() {
    this.movieService.getNewPoster(this.movie.id).subscribe(data => this.poster = data["backdrops"]["2"]["file_path"]);
    this.completeURL = this.imageBaseURL + this.poster;
    this.showPic = true;
    // console.log("posters()");
    // console.log(this.poster);
  }

}


// console.log(data["backdrops"]["2"]["file_path"]