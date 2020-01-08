import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  myUrl = 'http://localhost:3000/mydata[employee]';
  persons = 'http://localhost:3000/mydata[person]';
  fullUrl = 'http://localhost:3000/mydata';
  constructor(private myser: HttpClient) { }

 getMydata() {
    return this.myser.get(this.fullUrl);
  }
  getdata() {
    return this.myser.get(this.myUrl);
  }
  getpersons() {
    return this.myser.get(this.persons);
  }
}
