import { Component } from '@angular/core';
import { Conference } from '../../model/conference';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  list: Conference[] = [];

  constructor() {}

  ngOnInit() {
    this.list = [
      {
        title: 'Conference 1',
        description: 'Description for Conference 1',
        date: '2024-07-01',
        nbrMax: 5,
        nbrReservation: 1,
        picture: 'assets/conf1.jpg',
      },
      {
        title: 'Conference 2',
        description: 'Description for Conference 2',
        date: '2024-08-15',
        nbrMax: 10,
        nbrReservation: 5,
        picture: 'assets/conf2.jpg',
      },
    ];
  }
  participate(conf: Conference) {
      conf.nbrReservation++;
    
}}