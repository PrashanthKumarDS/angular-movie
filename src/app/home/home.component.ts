import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private http: HttpClient, private router: Router) {}

  trendingMovies: any;
  newMovies: any;
  isLoading = true;
  popularMovies: any;

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getNewMOvies();

    setTimeout(() => {
      this.isLoading = false; // Set to false when data is loaded
    }, 500); // Adjust the delay as needed
  }

  getTrendingMovies() {
    this.http.get('/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
    });
  }
  getNewMOvies() {
    this.http.get('/assets/data/popular-movies.json').subscribe((movies) => {
      this.newMovies = movies;
    });
    this.http.get('/assets/data/theater-movies.json').subscribe((movies) => {
      this.popularMovies = movies;
    });
  }

  naviagteToDetails(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
