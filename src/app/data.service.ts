import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  h1style: boolean=false;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

    firstclick(){
    this.h1style=true;
    console.log(this.h1style);
    return this.h1style;
  }





}
