import {Component, computed, inject, input} from '@angular/core';
import {DogService} from '../../services/dog';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-dog-detail',
  styleUrl: './dog-detail.css',
  templateUrl: './dog-detail.html',
})
export class DogDetail {
  protected dogService = inject(DogService);

  id= input.required<string>();

  protected dog = computed(() => this.dogService.getById(Number(this.id())))



}
