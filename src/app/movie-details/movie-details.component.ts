import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie :any;
  private imageBaseUrl = 'https://image.tmdb.org/t/p/';

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // Get the movie ID from the route parameters
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      // Fetch the movie details using the ID
      this.movieService.getMovieDetails(movieId).subscribe((data: any) => {
        this.movie = data;
      });
    });
  }
  
  getImageUrl(path: string): string {
    return this.imageBaseUrl + 'w500' + path;
  }

  onSaveClick()
  {
    this.movieService.saveMovieDetails(this.movie).subscribe(
      (response) => {
        alert("Movie Saved Successfully!");
        console.log('Movie details saved successfully!', response);
        // Handle success, e.g., show a success message or navigate to a different page
      },
      (error) => {
        console.error('Error saving movie details:', error);
        // Handle error, e.g., show an error message or take appropriate action
      }
    );
  }
}
