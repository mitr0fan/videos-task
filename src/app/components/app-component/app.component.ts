import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public isMoviesSelected = true;

    selectMovies() {
        this.isMoviesSelected = true;
    }

    selectChannels() {
        this.isMoviesSelected = false;
    }
}
