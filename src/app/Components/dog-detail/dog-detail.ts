import {Component, computed, inject, input, OnDestroy, OnInit} from '@angular/core';
import {DogService} from '../../services/dog';
import {Router, RouterLink} from '@angular/router';
import {TitleCasePipe, UpperCasePipe} from '@angular/common';
import {FurLabelPipe} from '../../pipes/fur-label-pipe';
import {Highlight} from '../../directives/highlight';
import {Confirm} from '../../directives/confirm';
import {SavedService} from '../../services/saved-service';

@Component({
  imports: [
    RouterLink,
    UpperCasePipe,
    FurLabelPipe,
    TitleCasePipe,
    Highlight,
    Confirm
  ],
  selector: 'app-dog-detail',
  styleUrl: './dog-detail.css',
  templateUrl: './dog-detail.html',
})
export class DogDetail implements OnInit, OnDestroy{

  protected dogService = inject(DogService);
  private router = inject(Router);
  protected saved = inject(SavedService)

  id= input.required<string>();

  protected dog = computed(() => this.dogService.getById(this.id()))

  private openedAt = 0;
  private dogName = '';

  ngOnInit(): void {
    const dog = this.dogService.getById(this.id());
    this.dogName = dog?.breed ?? `unknown dog (${this.id()})`;
    this.openedAt = Date.now();
    console.log(`[lifecycle] opened: ${this.dogName}`);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    console.log(`[lifecycle] closed: ${this.dogName} after ${seconds} seconds`);
  }

  protected onDelete(id: string): void {
    this.dogService.removeDog(id);
    this.router.navigate(['/dogs']);
  }


}
