import { Component, Input } from '@angular/core';
import { Movie } from './models/movie';
import { MovieServiceService } from './services/movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public movies;
  public searchQuery:string;
  basePosterURL: string = "https://image.tmdb.org/t/p/";
  size = {
    "small":"w300",
    "medium":"w780",
    "large":"w1280",
    "huge":"original"
  }
  public yesMovies:boolean = false;

  
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {
  }


  search() {
    console.log(this.searchQuery);
    console.log("searchQuery: " + this.searchQuery);
    this.movieService.getMovie(this.searchQuery).subscribe(data => this.movies = data);
    console.log(this.movies);
    this.yesMovies = true;
    // console.log(this.movies);
    // console.log("search query: " + this.searchQuery);
  }
  

  // moviePoster() {
  // }

  
  


}
