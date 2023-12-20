import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  id: any;
  type: any;
  movies: any;
  movieDetail: any;
  dataUrl: any;
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    console.log(this.id);
    this.type = this.route.snapshot.params['type'];

    switch (this.type) {
      case 'trending':
        this.dataUrl = '/assets/data/trending-movies.json';
        break;
      case 'popular':
        this.dataUrl = '/assets/data/theater-movies.json';
        break;
      case 'new':
        this.dataUrl = '/assets/data/popular-movies.json';
        break;
    }
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.http.get(this.dataUrl).subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
      let index = this.movies.findIndex((movie: any) => movie.id === this.id);
      console.log(index);
      if (index > -1) {
        this.movieDetail = this.movies[index];
        console.log(this.movieDetail);
      }
    });
  }
}
