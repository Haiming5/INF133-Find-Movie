import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListHelperComponent } from './movie-list-helper.component';

describe('MovieListHelperComponent', () => {
  let component: MovieListHelperComponent;
  let fixture: ComponentFixture<MovieListHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
