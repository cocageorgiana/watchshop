import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Watch } from '../model/watch';

@Injectable({
  providedIn: 'root'
})
export class InmemoryDb extends InMemoryDbService{

  createDb() {
    let watchesList = [
      {id: 1, name: 'Sentence 1', country: 'France', brand: 'Rolex', price: 340},
      {id: 2, name: 'Sentence 12', country: 'Belgium', brand: 'Rolex', price: 1550},
      {id: 3, name: 'Sentence 13', country: 'France', brand: 'Rolex', price: 6525},
      {id: 4, name: 'Sentence 14', country: 'France', brand: 'Rolex', price: 1220},
    ]
    return {users: {
      total: watchesList.length,
      results: watchesList
    }};
  }
}
