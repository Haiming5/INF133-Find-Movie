import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movie: Movie;
  imageBaseURL: string = "https://image.tmdb.org/t/p/w185";
  constructor() { }

  ngOnInit(): void {
  }

}
