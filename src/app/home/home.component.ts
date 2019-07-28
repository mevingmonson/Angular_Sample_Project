import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {OriginalService} from '../original.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;
  h2style: boolean=false;
  constructor( private data:DataService,private original:OriginalService) {}

  ngOnInit() {
  
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
    
  }
  firstclick(){
    this.h2style=this.data.firstclick();
    console.log(this.h2style);
    
  }
  secondclick(){
    this.h2style=this.original.secondclick();
    console.log('changed');
  }
 
  
}
