import {Component, inject} from '@angular/core';
import {Dog} from '../../shared/models/dog';
import {DogCard} from '../dog-card/dog-card';
import {DogService} from '../../services/dog';
import {DOG_CONFIG} from '../../shared/dog-config';

@Component({
  imports: [
    DogCard
  ],
  selector: 'app-dog-list',
  styleUrl: './dog-list.css',
  templateUrl: './dog-list.html',
})
export class DogList {
  protected dogService = inject(DogService)
  protected config = inject(DOG_CONFIG)

  protected dogList =this.dogService.dogList;
    onDogOpened(id:number): void {
      this.dogService.removeDog(id)

  }



}
