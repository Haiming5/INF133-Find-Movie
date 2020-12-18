// retrieves backdrops for specified moview (the posters)

import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
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
  randomNum: number = 1;


  movie: Movie;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movie = this.movieService.chosenMovie;
    
    console.log(this.movie);
  }

  posters() {
    this.movieService.getNewPoster(this.movie.id).subscribe(data => this.poster = data["backdrops"][this.randomNum.toString()]["file_path"]);
    this.completeURL = this.imageBaseURL + this.poster;
    this.showPic = true;
    this.randomNum = Math.floor((Math.random() * 10));

  }
}
