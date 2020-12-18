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
  constructor(private movieService: MovieServiceService, private router: Router, private elementRef: ElementRef) {}

  ngOnInit() {}
}
