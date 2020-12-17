import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() movieId:number; 

  constructor() { }

  ngOnInit(): void {
  }

}
