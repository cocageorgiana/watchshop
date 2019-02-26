import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://watch-listing.herokuapp.com/';
const LISTING = 'listing';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private client: HttpClient) { }

  public getListing(): Observable<any[]>  {
    return this.client.get<any[]>(BASE_URL + LISTING);

  }

}
