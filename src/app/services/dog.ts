import {computed, effect, inject, Service, signal} from '@angular/core';
import {Dog} from '../shared/models/dog';
import {DOG_CONFIG} from '../shared/dog-config';

@Service()
export class DogService {

  private config = inject(DOG_CONFIG)

  private dogs =signal<Dog[]>([
    {id: 1, name: "Lily", breed: "Poodle", furType: "Long Coat", isHypoallergenic: false},
    {id: 2, name: "Freddy", breed: "Boxer", furType: "Short Coat", isHypoallergenic: false},
    {id: 3, name: "Mia", breed: "Boxer", furType: "Long Coat", isHypoallergenic: false},
    {id: 4, name: "Jak", breed: "Maltese", furType: "Long Fur", isHypoallergenic: true},
    {id: 5, name: "Sammy", breed: "Poodle", furType: "Curly Coat", isHypoallergenic: false},
    {id: 6, name: "Tex", breed: "Poodle", furType: "Wavy Coat", isHypoallergenic: true},
    {id: 7, name: "Mumbo", breed: "Unknown", furType: "Shaggy Coat", isHypoallergenic: false}
  ])

  private favouriteIds = signal<readonly number[]>([]);

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


  toggleFavourite(id: number): void {
    this.favouriteIds.update((ids) =>
      ids.includes(id) ? ids.filter((existing) => existing !== id) : [...ids, id],
    );
  }

  isFavourite(id: number): boolean {
    return this.favouriteIds().includes(id);
  }
  getById(id: Number) : Dog | undefined{
    return this.dogs().find((d) => d.id === id);
  }

  getDog(id: number): Dog | undefined {
    return this.getById(id);
  }

  nextId(): number {
    return Math.max(0, ...this.dogs().map((d) => d.id)) + 1;
  }

  updateDog(updated: Dog): void {
    this.dogs.update((list) => list.map((b) => (b.id === updated.id ? updated : b)));
  }
}
