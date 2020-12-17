import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() movie: Movie;
  basePosterURL: string = "https://image.tmdb.org/t/p/";
  size = {
    "small":"w300",
    "medium":"w780",
    "large":"w1280",
    "huge":"original"
  }
  latestMovies:Movie[] = [];
  relativePosterURL:string;
  completePosterURL:string;
  id:number;
  

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.relativePosterURL = this.movie.poster;
    this.completePosterURL = this.basePosterURL + this.size.medium + this.relativePosterURL;
    this.id = this.movie.id;

  }

}
