import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  login(email: string, password: string) {
    return (email === CONSTANTS.USERS[0].email && password === CONSTANTS.USERS[0].password);
  }
}
