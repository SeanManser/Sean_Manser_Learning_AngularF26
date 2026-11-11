import {inject, Service, Signal} from '@angular/core';
import {HttpClient, httpResource} from '@angular/common/http';
import {DOG_CONFIG} from '../shared/dog-config';
import {catchError, Observable, of, retry} from 'rxjs';
import {Dog} from '../shared/models/dog';

@Service()
export class DogApiService {
  private http = inject(HttpClient)
  private config = inject(DOG_CONFIG)
  private url = `${this.config.apiBaseUrl}/dogs`

  search(query: string, perPage: 10):Observable<Dog[]>{
    return this.http.get<Dog[]>(`${this.url}/search`, {
      params: {query, per_page: perPage},
    });
  }

  getById(id: string): Observable<Dog | null> {
    return this.http.get<Dog>(`${this.url}/${id}`).pipe(
      retry(2),
      catchError(() => of(null)),
    );
  }

  byId(id: Signal<string>) {
    return httpResource<Dog>(() => `${this.url}/${id()}`);
  }

  byIds(ids: Signal<string[]>) {
    return httpResource<Dog[]>(() => ids().length
        ? { url: this.url, params: { by_ids: ids().join(',') } }
        : undefined,
      { defaultValue: [] });
  }

  byBreed(breed: Signal<string>){
    return httpResource<Dog[]>(()=>({
      url: this.url,
      params: {by_breed : breed(), per_page: 10},
    }),{defaultValue: []});
  }



}
