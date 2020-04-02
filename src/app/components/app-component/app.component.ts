import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isMoviesSelected = true;
    public showModal = false;
    public userName: string;
    public isUserAuthorized = false;

    constructor(private localStorage: LocalStorageService) {}

    ngOnInit() {
        if (this.localStorage.getUserFromLocalStorage()) {
            this.userName = this.localStorage.getUserFromLocalStorage();
            this.isUserAuthorized = true;
        }
    }

    showModalLogin() {
        this.showModal = true;
    }

    login(user: string) {
        this.userName = user;
        this.isUserAuthorized = true;
        this.localStorage.addUserToLocalStorage(user);
        this.hideModalLogin();
    }

    logout() {
        this.isUserAuthorized = false;
        this.userName = '';
        this.localStorage.removeUserFromLocalStorage();
    }

    hideModalLogin() {
        this.showModal = false;
    }

    selectMovies() {
        this.isMoviesSelected = true;
    }

    selectChannels() {
        this.isMoviesSelected = false;
    }
}
