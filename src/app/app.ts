import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { Dog } from './shared/models/dog';
import {DogList} from "./Components/dog-list/dog-list";
@Component({
  imports: [RouterOutlet, DogList, RouterLinkActive, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


}
