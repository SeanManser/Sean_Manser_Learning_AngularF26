import {computed, effect, Service, signal} from '@angular/core';
import {Dog} from '../shared/models/dog';

@Service()
export class DogService {
  private dogs =signal<Dog[]>([
    {id: 1, name: "Lily", breed: "Golden Retriever", furType: "Long Coat", isHypoallergenic: false},
    {id: 2, name: "Freddy", breed: "Boxer", furType: "Short Coat", isHypoallergenic: false},
    {id: 3, name: "Mia", breed: "Border Collie", furType: "Long Coat", isHypoallergenic: false},
    {id: 4, name: "Jak", breed: "Maltese", furType: "Long Fur", isHypoallergenic: true},
    {id: 5, name: "Sammy", breed: "Poodle", furType: "Curly Coat", isHypoallergenic: false},
    {id: 6, name: "Tex", breed: "Portuguese Water Dog", furType: "Wavy Coat", isHypoallergenic: true},
    {id: 7, name: "Mumbo", breed: "Unknown", furType: "Shaggy Coat", isHypoallergenic: false}
  ])

  dogList = this.dogs.asReadonly();

  dogCount =computed(()=>this.dogs().length);

  constructor() {
    effect(() => {
      console.log('Current number of dogs: ', this.dogCount())
    });
  }

  addDog(d: Dog):void{
    this.dogs.update((list)=>[...list, d]);
  }

  removeDog(id:number):void{
    this.dogs.update((list)=>list.filter(d=>d.id !== id))
  }

  dogsWithHypoallergenic = computed(()=>this.dogList().filter(d=>d.isHypoallergenic));

  numberOfHypoDogs = computed(()=>this.dogsWithHypoallergenic().length);

}
