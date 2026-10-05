import {Component, inject} from '@angular/core';
import {Dog} from '../../shared/models/dog';
import {DogCard} from '../dog-card/dog-card';
import {DogService} from '../../services/dog';

@Component({
  imports: [
    DogCard
  ],
  selector: 'app-dog-list',
  styleUrl: './dog-list.css',
  templateUrl: './dog-list.html',
})
export class DogList {
  private dogService = inject(DogService)

  protected dogList =this.dogService.dogList;
    onDogOpened(dog: Dog): void {

    console.warn("Opened: ", dog.name )
  }
}
