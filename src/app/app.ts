import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dog } from './shared/models/dog';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Assignment 1');

  fName : string = "Sean";
  lName : string = "Manser"

  protected dogList : Dog[] = [
    {id: 1, name: "Lily", breed: "Golden Retriever", furType: "Long Coat", isHypoallergenic: false},
    {id: 2, name: "Freddy", breed: "Boxer", furType: "Short Coat", isHypoallergenic: false},
    {id: 3, name: "Mia", breed: "Border Collie", furType: "Long Coat", isHypoallergenic: false},
    {id: 4, name: "Jak", breed: "Maltese", furType: "Long Fur", isHypoallergenic: true},
    {id: 5, name: "Sammy", breed: "Poodle", furType: "Curly Coat", isHypoallergenic: false},
    {id: 6, name: "Tex", breed: "Portuguese Water Dog", furType: "Wavy Coat", isHypoallergenic: true}
  ]
}
