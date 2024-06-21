import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Login } from '../../store/store.state';
import { Res } from '../../app.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private loginSuccess = new Subject<boolean>();
  private loginSuccessObservable = this.loginSuccess.asObservable();
  private destination = '/auth/home';
  private isAuthenticated = Boolean(this.getUserData().id);
  private readonly baseAPI = 'localhost:300';
  getLoginSuccessObservable() {
    return this.loginSuccessObservable;
  }

  setAuthenticated(isLoggedIn: boolean) {
    this.loginSuccess.next(isLoggedIn);
  }

  getDestination() {
    return this.destination;
  }

  setDestination(destination: string) {
    this.destination = destination;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  login(loginData: { email: string; password: string }) {
    return this.http.post<Res<Login>>(`${this.baseAPI}/login`, loginData);
  }

  getUserData() {
    const user = localStorage.getItem('user');
    console.log(user)
    console.log(user && user == undefined);
    return user && user !== undefined ? JSON.parse(user) : ({} as Login);
  }
  logout() {
    this.setAuthenticated(false);
    localStorage.clear();
  }
}
