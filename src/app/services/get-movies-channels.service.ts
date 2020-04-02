import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants/constants';
import { Movie } from '../types/movie';
import { Channel } from '../types/channel';

@Injectable({
    providedIn: 'root',
})
export class GetMoviesChannelsService {
    constructor() {}

    getMovies(): Movie[] {
        return CONSTANTS.MOVIES;
    }

    getChannels(): Channel[] {
        return CONSTANTS.CHANNELS;
    }
}
