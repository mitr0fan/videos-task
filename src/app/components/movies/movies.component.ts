import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/types/movie';
import { GetMoviesChannelsService } from 'src/app/services/get-movies-channels.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private getMoviesService: GetMoviesChannelsService) { }

  ngOnInit() {
    this.movies = this.getMoviesService.getMovies();
  }

}
