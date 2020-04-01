import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesChannelsService {

  constructor() { }

  getMovies() {
    return CONSTANTS.MOVIES;
  }
}
