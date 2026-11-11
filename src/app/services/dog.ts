import {computed, effect, inject, Service, signal} from '@angular/core';
import {Dog} from '../shared/models/dog';
import {DOG_CONFIG} from '../shared/dog-config';
import {HttpClient} from '@angular/common/http';

@Service()
export class DogService {
  private http = inject(HttpClient)
  private config = inject(DOG_CONFIG)


  loadDogs():void{
    this.http.get<any>('https://dogapi.dog/api/v2/breeds').subscribe(response=>{

      const dogs: Dog[] = response.data.map((item:any)=>({
        id: item.id,
        country: item.attributes.origin.country,
        breed: item.attributes.name,
        furType: item.attributes.coat.type,
        isHypoallergenic: item.attributes.hypoallergenic
      }));

      this.dogs.set(dogs)
    })
  }
  private dogs =signal<Dog[]>([
    {id: 'local-1', country: "Canada", breed: "Poodle", furType: "Long", isHypoallergenic: false},
    {id: 'local-2', country: "Australia", breed: "Boxer", furType: "Short", isHypoallergenic: false},
    {id: 'local-3', country: "Germany", breed: "Boxer", furType: "Long", isHypoallergenic: false},
    {id: 'local-4', country: "England", breed: "Maltese", furType: "Long", isHypoallergenic: true},
    {id: 'local-5', country: "Japan", breed: "Poodle", furType: "Mixed", isHypoallergenic: false},
    {id: 'local-6', country: "United States", breed: "Poodle", furType: "Short", isHypoallergenic: true},
    {id: 'local-7', country: "Canada", breed: "Unknown", furType: "Mixed", isHypoallergenic: false}
  ])

  private favouriteIds = signal<readonly string[]>([]);

  dogList = this.dogs.asReadonly();

  dogCount =computed(()=>this.dogs().length);

  constructor() {
    this.loadDogs();

    effect(() => {
      console.log('Current number of dogs: ', this.dogCount())
    });
  }

  addDog(b: Omit<Dog, 'id'>): void {
    this.dogs.update((list) =>
      [...list, { ...b, id: crypto.randomUUID() }]);
  }

  removeDog(id:string):void{
    this.dogs.update((list)=>list.filter(d=>d.id !== id))
  }

  dogsWithHypoallergenic = computed(()=>this.dogList().filter(d=>d.isHypoallergenic));

  numberOfHypoDogs = computed(()=>this.dogsWithHypoallergenic().length);


  toggleFavourite(id: string): void {
    this.favouriteIds.update((ids) =>
      ids.includes(id) ? ids.filter((existing) => existing !== id) : [...ids, id],
    );
  }

  isFavourite(id: string): boolean {
    return this.favouriteIds().includes(id);
  }
  getById(id: string) : Dog | undefined{
    return this.dogs().find((d) => d.id === id);
  }

  getDog(id: string): Dog | undefined {
    return this.getById(id);
  }

  nextId(): string {
    return crypto.randomUUID();
  }

  updateDog(updated: Dog): void {
    this.dogs.update((list) => list.map((b) => (b.id === updated.id ? updated : b)));
  }
}
