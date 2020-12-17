import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  
  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
  }

}
