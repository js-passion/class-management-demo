import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassDetailsService {

  constructor(private http: Http) { }

  getPreseterList() {
    
  }

  public getPreseterDetails(): User[] {
    return [
      new User(1, 'Mayank', 'Gupta', 'Big Data'),
      new User(2, 'Satish', 'Khardia', 'Unit Testing'),
      new User(3, 'Prem', 'Prakash', 'Micro Service'),
      new User(4, 'Nikhil', 'Pareek', 'Integration Testing'),
      new User(5, 'Gaurav', 'Pareek', 'JAVA'),
      new User(6, 'Mohd.', 'Hussain', 'Angular')
    ];
  }

  getAttendeeList(empid: string) {

  }

  public getAttendeeDetails() {
    return this.http.get('./assets/api/attendee.json').pipe(map((response: any) => response.json()));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return throwError(msg);
  }
}