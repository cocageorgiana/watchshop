import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Watch } from '../model/watch';

@Injectable({
  providedIn: 'root'
})
export class InmemoryDb extends InMemoryDbService{

  createDb() {
    let watchesList = [
      {id: 1, name: 'Atlantic', country: 'France', brand: 'Rolex', price: 340},
      {id: 2, name: 'Rolex', country: 'Belgium', brand: 'Rolex', price: 1550},
      {id: 3, name: 'Cartier', country: 'France', brand: 'Rolex', price: 6525},
      {id: 4, name: 'Rolex', country: 'France', brand: 'Rolex', price: 1220},
    ]
    return {watchesList: {
      total: watchesList.length,
      results: watchesList
    }};
  }
}
