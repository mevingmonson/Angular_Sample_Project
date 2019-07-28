import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  apptitle: string = "myapp";
  //appTitle = 'myapp';
  constructor() { }

  ngOnInit() {
  }

}
