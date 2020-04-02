import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private key = 'userName';

  constructor() { }

  getUserFromLocalStorage() {
    return localStorage.getItem(this.key);
  }

  addUserToLocalStorage(name: string) {
    localStorage.setItem(this.key, name);
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem(this.key);
  }
}
