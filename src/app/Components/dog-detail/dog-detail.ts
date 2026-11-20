import {Component, computed, inject, input} from '@angular/core';
import {DogService} from '../../services/dog';
import {Router, RouterLink} from '@angular/router';
import {TitleCasePipe, UpperCasePipe} from '@angular/common';
import {FurLabelPipe} from '../../pipes/fur-label-pipe';

@Component({
  imports: [
    RouterLink,
    UpperCasePipe,
    FurLabelPipe,
    TitleCasePipe
  ],
  selector: 'app-dog-detail',
  styleUrl: './dog-detail.css',
  templateUrl: './dog-detail.html',
})
export class DogDetail {

  protected dogService = inject(DogService);
  private router = inject(Router);

  id= input.required<string>();

  protected dog = computed(() => this.dogService.getById(this.id()))

  protected onDelete(id: string): void {
    this.dogService.removeDog(id);
    this.router.navigate(['/dogs']);
  }


}
