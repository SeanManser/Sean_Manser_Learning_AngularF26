import {Component, input} from '@angular/core';
import {Dog} from '../../shared/models/dog';

@Component({
  imports: [],
  selector: 'app-dog-card',
  styleUrl: './dog-card.css',
  templateUrl: './dog-card.html',
})
export class DogCard {

  dog = input.required<Dog>();

}
