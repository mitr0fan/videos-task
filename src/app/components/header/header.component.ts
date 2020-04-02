import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CONSTANTS } from 'src/app/constants/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input() isUserAuthorized: boolean;
    @Input() userName: string;
    @Output() signInEvent = new EventEmitter();
    @Output() signOutEvent = new EventEmitter();

    constructor(private localStorage: LocalStorageService) {}

    get user() {
        return this.userName;
    }

    set user(value: string) {
        this.userName = value;
        this.localStorage.addUserToLocalStorage(value);
        CONSTANTS.USERS[0].name = value;
    }

    signIn() {
        this.signInEvent.emit();
    }

    signOut() {
        this.signOutEvent.emit();
    }
}
