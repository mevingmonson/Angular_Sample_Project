// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todolist',
//   templateUrl: './todolist.component.html',
//   styleUrls: ['./todolist.component.css']
// })
// export class TodolistComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';


export interface Todo {
  title: string;
  date: string;
  poster : string;
}
@Component({
     selector: 'app-todolist',
     templateUrl: './todolist.component.html',
     styleUrls: ['./todolist.component.css']
   })
export class TodolistComponent {
  title = 'To-Do';
  taskName  = String;
  todoList = String;
  arr = [];


  public todo: Todo[] = [
    { title: 'Watch Bohemian Rhapsody', date: new Date().toString() ,  poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png'},
    { title: 'Read Medium Article', date: new Date().toString() ,  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg' },
    { title: 'Swimming', date: new Date().toString() ,  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'}
  ];
  
  public done: Todo[] = [
    { title: 'Write a blog', date: new Date().toString() ,  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'},
    { title: 'Study Angular', date: new Date().toString(),  poster: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg' },
    { title: 'Check e-mail', date: new Date().toString() ,  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'},
    { title: 'Walk dog', date: new Date().toString(),  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg' }
  ];
  
  
  


  onSubmit(f : NgForm ){
    this.arr = f.value;
  
    var todo = this.arr["taskName"];

  
      this.todo.push({ title: todo, date: new Date().toString() ,  poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg' }) ;
   
  }

  drop(event: CdkDragDrop<Todo[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      // change the items index if it was moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex

      );
    } else {
      // remove item from the previous list and add it to the new array
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
