import { Component, OnInit, Input } from '@angular/core';
import { WatchService } from 'src/app/shared/services/watch.service';
import { Listing } from 'src/app/shared/model/listing';
import { ListingRequestDto } from 'src/app/shared/dto/listingrequest.dto';
import { IWatchResponse } from 'src/app/shared/model/watch';

@Component({
  selector: 'app-watches-list',
  templateUrl: './watches-list.component.html',
  styleUrls: ['./watches-list.component.scss']
})
export class WatchesListComponent implements OnInit {
  @Input() referenceEnumValues: any[];
  @Input() watchesList: any[];
  public watches: any[] = [
    {'id': '1', 'name': 'Atlantic', 'price': '3000$ ', 'stars': '3', 'image': 'Atlantic'},
    {'id': '2', 'name': 'Rolex', 'price': '5000$ ', 'stars': '5', 'image': 'Rolex'},
    {'id': '3', 'name': 'Cartier', 'price': '1500$ ', 'stars': '3', 'image': 'Cartier'}];

  public listingItems: any[]=[];

  constructor(private watchService: WatchService) { }

  ngOnInit() {
   // this.watchService.getListing().subscribe(results => this.listingItems = results);
    this.watchService.getWatches().subscribe(watch => {
      this.listingItems = watch;
      console.log(this.watchesList);
      console.log(this.listingItems);});
      console.log(this.watchesList);

  }



}
