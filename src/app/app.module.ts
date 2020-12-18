import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; // check out https://angular.io/guide/http for more info.
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SpecificMovieComponent } from './specific-movie/specific-movie.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieListHelperComponent } from './movie-list-helper/movie-list-helper.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SpecificMovieComponent,
    PageNotFoundComponent,
    MovieListHelperComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
