import { Component, Input } from '@angular/core';
import { Movie } from './models/movie';
import { MovieServiceService } from './services/movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public movies: Movie[];
  public searchQuery:string;
  // basePosterURL: string = "https://image.tmdb.org/t/p/";
    
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {}


  search() {
    this.movieService.getMovie(this.searchQuery).subscribe(data => this.movies = data["results"]);
    console.log("movies: ");
    console.log(this.movies);
  }
}
