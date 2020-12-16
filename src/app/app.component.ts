import { Component } from '@angular/core';
import { MovieServiceService } from './services/movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public movies = [];

  
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {
    this.movieService.getMovie("spider man")
      .subscribe(data => this.movies = data);

    console.log(this.movies);
  }
  

  
  


}
