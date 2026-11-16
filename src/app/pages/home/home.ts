import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { 
//attributes
title :string;
stat:boolean = false;
//constructors
constructor(){
  this.title = "HOME PAGE";
  this.stat = false; 
}
//methods
change(): void {
  this.title = "WELCOME";
  this.stat = true;
}
ngOnInit(): void {
  console.log("home page loaded");
}
}