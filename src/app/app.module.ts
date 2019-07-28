import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


const routes: Routes=[
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'todolist', component:TodolistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'about', component: AboutComponent },
    //   { path: 'contact', component: ContactComponent }
    // ])
  
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
