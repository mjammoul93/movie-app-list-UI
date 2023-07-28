import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any ={};

  constructor(private movieService: MovieService) { }

  ngOnInit() {
   
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies=data.results;
      console.log(data);
    });
   /* this.movieService.getPopularMovies().subscribe((res:any)=>{
      console.log(res);
    })*/
  }
  
}