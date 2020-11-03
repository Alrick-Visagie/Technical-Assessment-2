import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl = 'http://localhost:59540/api/';

  constructor(private http: HttpClient) { }

  getLogins(): Observable<any> {
    return this.http.get(this.baseUrl + 'Logins');
  }
}
