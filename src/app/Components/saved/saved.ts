import {Component, computed, inject} from '@angular/core';
import {DogService} from '../../services/dog';
import {SavedService} from '../../services/saved-service';
import {Dog} from '../../shared/models/dog';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-saved',
  styleUrl: './saved.css',
  templateUrl: './saved.html',
})
export class Saved {
  private dogService = inject(DogService);
  private saved = inject(SavedService);

  protected savedDogs = computed(() => {
    const list = this.dogService.dogList();
    return this.saved.savedIds()
      .map((id) => list.find((d) => d.id === id))
      .filter((d): d is Dog => d !== undefined);
  });
}
