import {Component, computed, inject, input} from '@angular/core';
import {DogCard} from '../dog-card/dog-card';
import {RouterLink} from '@angular/router';
import {DogService} from '../../services/dog';

@Component({
  imports: [
    DogCard,
    RouterLink
  ],
  selector: 'app-dog-by-breed',
  styleUrl: './dog-by-breed.css',
  templateUrl: './dog-by-breed.html',
})
export class DogByBreed {

  protected dogService = inject(DogService);


  breed = input.required<string>();

  protected dogList = computed(() =>
    this.dogService.dogList().filter((d) => d.breed === this.breed()),
  );

}
