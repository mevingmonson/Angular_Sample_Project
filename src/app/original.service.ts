import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OriginalService {
h2style: boolean=true;

  constructor() { }

  secondclick(){
    this.h2style=false;
    console.log('second click');
    return this.h2style;
  }
}
