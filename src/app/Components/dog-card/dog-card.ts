import {Component, input, output} from '@angular/core';
import {Dog} from '../../shared/models/dog';
import {RouterLink} from '@angular/router';
import {TitleCasePipe} from '@angular/common';
import {TruncatePipe} from '../../pipes/truncate-pipe';
import {Highlight} from '../../directives/highlight';

@Component({
  imports: [
    RouterLink,
    TitleCasePipe,
    TruncatePipe,
    Highlight
  ],
  selector: 'app-dog-card',
  styleUrl: './dog-card.css',
  templateUrl: './dog-card.html',
})
export class DogCard {

  dog = input.required<Dog>();

  expanded = false
  opened = output<number>()

  toggle(): void {
    this.expanded = !this.expanded
    this.opened.emit(Number(this.dog().id))
  }
}
