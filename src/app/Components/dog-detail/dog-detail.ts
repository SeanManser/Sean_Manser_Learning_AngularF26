import {Component, computed, inject, input} from '@angular/core';
import {DogService} from '../../services/dog';
import {Router, RouterLink} from '@angular/router';

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
  private router = inject(Router);

  id= input.required<string>();

  protected dog = computed(() => this.dogService.getById(Number(this.id())))

  protected onDelete(id: number): void {
    this.dogService.removeDog(id);
    this.router.navigate(['/dogs']);
  }


}
