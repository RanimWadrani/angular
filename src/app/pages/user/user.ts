import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Indiv } from '../../model/indiv';

@Component({
  selector: 'app-user',
  imports: [UpperCasePipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  list: Indiv[] = [];

  ngOnInit() {
    this.list = [
      { Name: 'Ranim', Age: 25, date: '2024-07-01' },
      { Name: 'Neirou', Age: 25, date: '2024-07-01' },
    ];
  }
}