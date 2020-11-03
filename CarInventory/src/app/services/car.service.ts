import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost:59540/api/';
  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.baseUrl + 'Cars');
  }

  postCars(formData: NgForm) : Observable<any>
  {
    return this.http.post(this.baseUrl + 'Cars', formData);
  }

  putCars(id: number, formData: NgForm) : Observable<any>
  {
    return this.http.put(this.baseUrl + 'Cars/' + id, formData);
  }

  deleteCars(id: number) {
    return this.http.delete(this.baseUrl + 'Cars/' + id);
  }
}
