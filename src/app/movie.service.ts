import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGYxYTk3NDE3NzIxZDY2ZDQwNWY1NTRlMDkyYTRiYSIsInN1YiI6IjU0ZjQ5OGE2OTI1MTQxNzk5ZjAwMjFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AmH9ahcSsro2udQ5FbFbLBM6d62_nlZH8oyKlCJ8x8w';
  private apiUrl: string = '';
  private imageBaseUrl = 'https://image.tmdb.org/t/p/';
  
  constructor(private http: HttpClient ,private configService: ConfigService) {
    this.apiUrl = configService.getApiUrl();
   }

  getMovies(): Observable<any> {
    const url = `${this.apiUrl}/api/movies`;
    return this.http.get<any>(url);
     
  }
  private API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGYxYTk3NDE3NzIxZDY2ZDQwNWY1NTRlMDkyYTRiYSIsInN1YiI6IjU0ZjQ5OGE2OTI1MTQxNzk5ZjAwMjFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AmH9ahcSsro2udQ5FbFbLBM6d62_nlZH8oyKlCJ8x8w';
  private API_URL = 'https://api.themoviedb.org/3';

  getPopularMovies(): Observable<any> {
    var options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGYxYTk3NDE3NzIxZDY2ZDQwNWY1NTRlMDkyYTRiYSIsInN1YiI6IjU0ZjQ5OGE2OTI1MTQxNzk5ZjAwMjFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AmH9ahcSsro2udQ5FbFbLBM6d62_nlZH8oyKlCJ8x8w'
        }
      };
      return this.http.get<any>(
        `${this.API_URL}/movie/popular`,options
      );
    }

    getMovieDetails(movieId: number): Observable<any> {
      var options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGYxYTk3NDE3NzIxZDY2ZDQwNWY1NTRlMDkyYTRiYSIsInN1YiI6IjU0ZjQ5OGE2OTI1MTQxNzk5ZjAwMjFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AmH9ahcSsro2udQ5FbFbLBM6d62_nlZH8oyKlCJ8x8w'
        }
      };
      const url = `${this.apiUrl}/api/movies/${movieId}`;
      return this.http.get<any>(url);
    }

  saveMovieDetails(movie: any): Observable<any> {
    const url = `${this.apiUrl}/api/movies`;
    return this.http.post<any>(url, movie);
  }
  

  private handleError(error: HttpErrorResponse) {
    // You can log the error or handle it in any other way
    console.error('HTTP error occurred:', error);

    // Rethrow the error as a user-friendly message
    // You can customize the error message based on the error status, etc.
    return throwError('Something went wrong. Please try again later.');
  }
}