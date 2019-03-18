import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Watch, IWatchResponse } from '../model/watch';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  search(filter: {name: string} = {name: ''}, page = 1): Observable<IWatchResponse> {
    return this.http.get<IWatchResponse>('/api/watchesList')
    .pipe(
      tap((response: IWatchResponse) => {
        response.results = response.results
          .map(watch => new Watch(watch.id, watch.name))
          .filter(watch => watch.name.includes(filter.name))
        return response;
      })
      );
  }
}
