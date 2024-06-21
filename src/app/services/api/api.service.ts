import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Contact,
  Conversation,
  Messages,
  Operator,
  Overview,
} from '../../store/store.state';
import { LoginData } from '../../app';
import { AuthService } from '../auth/auth.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);
  private auth = inject(AuthService);
  private BASE_URL = environment.BASE_API;

  getToken() {
    const token = this.auth.getUserData().token;
    return token;
  }
  public getConversations() {
    return this.http.get<Conversation[]>(`${this.BASE_URL}/top-conversations`, {
      headers: { Authorization: this.getToken() },
    });
  }

  public getOperators() {
    return this.http.get<Operator[]>(`${this.BASE_URL}/operators`, {
      headers: { Authorization: this.getToken() },
    });
  }

  public getOverview() {
    return this.http.get<Overview>(`${this.BASE_URL}/overview`, {
      headers: { Authorization: this.getToken() },
    });
  }

  public geContacts() {
    return this.http.get<Contact[]>(`${this.BASE_URL}/contacts`, {
      headers: { Authorization: this.getToken() },
    });
  }

  public geChats() {
    return this.http.get<Contact[]>(`${this.BASE_URL}/chats`, {
      headers: { Authorization: this.getToken() },
    });
  }

  public getMessages(id: string) {
    return this.http.get<Messages[]>(`${this.BASE_URL}/messages/${id}`, {
      headers: { Authorization: this.getToken() },
    });
  }

  public login(login: LoginData) {
    return this.http.post(`${this.BASE_URL}/login`, login);
  }

  public register(register: LoginData) {
    return this.http.post(`${this.BASE_URL}/register`, register);
  }
}
