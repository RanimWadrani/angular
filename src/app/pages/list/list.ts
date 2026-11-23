import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Conference } from '../../model/conference';

@Component({
  selector: 'app-list',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  list: Conference[] = [];

  constructor() {}

  ngOnInit() {
    this.list = [
      {
        title: 'Conference 4',
        description: 'Description for Conference 1',
        date: '2024-07-01',
        nbrMax: 5,
        nbrReservation: 1,
        picture: 'https://picsum.photos/400/250?3',
      },
      {
        title: 'Conference 5',
        description: 'Description for Conference 2',
        date: '2024-08-15',
        nbrMax: 10,
        nbrReservation: 5,
        picture: 'https://picsum.photos/400/250?4',
      },
    ];
  }

  searchTitle: string = '';

  participate(conf: Conference) {
    conf.nbrReservation++;
  }
}