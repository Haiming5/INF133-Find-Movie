import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './models/movie';
import { MovieServiceService } from './services/movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public movies: Movie[];
  // public searchQuery:string;
  // basePosterURL: string = "https://image.tmdb.org/t/p/";
  // movieChosen: boolean = false;
  constructor(private movieService: MovieServiceService, private router: Router, private elementRef: ElementRef) {}

  ngOnInit() {}

  // ngOndestroy() {
  //   this.elementRef.nativeElement.remove();
  // }


  // search() {
  //   this.movieService.getMovie(this.searchQuery).subscribe(data => this.movies = data["results"]);
                                                                              
  //   console.log("movies: ");
  //   console.log(this.movies);
  //   this.router.navigate(['/']);
  //   this.movieChosen = false; 

  // }
}
