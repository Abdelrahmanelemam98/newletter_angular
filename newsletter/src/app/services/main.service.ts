import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  baseUrl = ' http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  getAllEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}${email}`);
  }

  AddEmail(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }

  getEmailById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
}
