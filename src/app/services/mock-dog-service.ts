import {computed, effect, inject, Injectable, Service, signal} from '@angular/core';
import {DOG_CONFIG} from '../shared/dog-config';
import {Dog} from '../shared/models/dog';

@Injectable()
export class MockDogService {

  private config = inject(DOG_CONFIG)

  private dogs =signal<Dog[]>([
    {id: 777, name: "Lucky", breed: "Penguin", furType: "A cute flightless bird", isHypoallergenic: true},

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
