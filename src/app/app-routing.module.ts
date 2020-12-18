import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SpecificMovieComponent } from './specific-movie/specific-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path: 'findMovie', component: MovieListComponent},
  {path: 'specificMovie', component: SpecificMovieComponent},
  {path: '', redirectTo:'/findMovie', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [ AppComponent ],
  // declarations: [ AppComponent, SpecificMovieComponent ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
