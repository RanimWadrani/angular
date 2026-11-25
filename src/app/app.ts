import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shearedcomponent/footer/footer';
import { Header } from './shearedcomponent/header/header';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { User } from './pages/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header , Home ,Footer, User,List],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectName');
}
