import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CONSTANTS } from 'src/app/constants/constants';

@Component({
    selector: 'app-modal-login',
    templateUrl: './modal-login.component.html',
    styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
    @Output() exitEvent = new EventEmitter();
    @Output() loginEvent = new EventEmitter();
    email: string;
    password: string;

    constructor(private authService: AuthorizationService) {}

    login() {
        if (this.authService.login(this.email, this.password)) {
            this.loginEvent.emit(CONSTANTS.USERS[0].name);
        }
    }

    exit(event: Event) {
        const target = event.target as HTMLElement;
        if (target.className === 'modal-container') {
            this.exitEvent.emit();
        }
    }
}
