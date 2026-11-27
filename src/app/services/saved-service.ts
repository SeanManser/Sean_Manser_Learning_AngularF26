import {effect, Service, signal} from '@angular/core';

@Service()
export class SavedService {

  private readonly storageKey = 'greatestDogs.saved'

  private ids = signal<readonly string[]>(this.loadSavedIds());

  savedIds = this.ids.asReadonly();

  constructor() {
    effect(()=> {
      const ids = this.ids();
      try{
        localStorage.setItem(this.storageKey, JSON.stringify(ids))
      }catch{

      }
    })
  }
  private loadSavedIds(): string[]{
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : [];

    }catch {
      return []
    }
  }

  toggle(id: string): void{
    this.ids.update((ids) =>
      ids.includes(id) ? ids.filter((existing) => existing !== id) : [...ids, id],
    );
  }
  isSaved(id: string): boolean{
    return this.ids().includes(id);
  }

}
