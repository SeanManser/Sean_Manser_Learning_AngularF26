import {Component, inject, signal} from '@angular/core';
import {Dog} from '../../shared/models/dog';
import {DogCard} from '../dog-card/dog-card';
import {DogService} from '../../services/dog';
import {DOG_CONFIG} from '../../shared/dog-config';
import {DogApiService} from '../../services/dog-api-service';

@Component({
  imports: [
    DogCard
  ],
  selector: 'app-dog-list',
  styleUrl: './dog-list.css',
  templateUrl: './dog-list.html',
})
export class DogList {
  private api = inject(DogApiService)
  protected dogService = inject(DogService)
  protected config = inject(DOG_CONFIG)

  breed =signal(inject(DOG_CONFIG).defaultBreed)
  dogs =this.api.byBreed(this.breed)

  protected dogList =this.dogService.dogList;
    onDogOpened(id:string): void {
      this.dogService.removeDog(id)

  }



}
