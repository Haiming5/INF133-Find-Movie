import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; // check out https://angular.io/guide/http for more info.
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselCardComponent,
    MovieListComponent,
    MovieComponent
    
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule. Check the link above for more info.
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
