import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { Watch, IWatchResponse } from '../model/watch';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(filter: {name: string} = {name: ''}, page = 1): Observable<IWatchResponse> {
    return this.http.get<IWatchResponse>('/api')
    .pipe(
      tap((response: IWatchResponse) => {
        response.results = response.results
          .map(user => new Watch(user.id, user.name))
          .filter(user => user.name.includes(filter.name))
        return response;
      })
      );
  }
}
