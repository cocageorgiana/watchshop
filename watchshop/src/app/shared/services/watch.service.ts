import { Listing } from 'src/app/shared/model/listing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListingRequestDto } from '../dto/listingrequest.dto';
import { IWatchResponse } from '../model/watch';

const BASE_URL = 'https://watch-listing.herokuapp.com/';
const LISTING = 'listing';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private client: HttpClient) { }

  public getListing(): Observable<ListingRequestDto[]>  {
    return this.client.get<ListingRequestDto[]>(BASE_URL + LISTING).pipe(
      map( (response: any) => {
        return response._embedded.listing;
      })

    );
    }

    public getWatches(): Observable<IWatchResponse[]> {
      return this.client.get<IWatchResponse>('/api/watchesList')
      .pipe(
        map( (response: any) => {
          console.log(response);
          return response;
        })
      );
    }
}
