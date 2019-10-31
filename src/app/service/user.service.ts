import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080/api";

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users' + id);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User> (this.baseUrl, this.httpOptions);
  }

  createUser(user: User): Observable<any> {
    return this.http.put (this.baseUrl, user, this.httpOptions);
  }
}
