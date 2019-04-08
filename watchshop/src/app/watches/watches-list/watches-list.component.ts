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

  public listingItems: any[]=[];

  constructor(private watchService: WatchService) { }

  ngOnInit() {
    this.watchService.getWatches().subscribe(watch => {
      this.listingItems = watch;
      console.log(this.watchesList);
      console.log(this.listingItems);
    });

  }

  searchedFinished(newArray: any[]) {
    this.listingItems = newArray;
  }

  title = 'Angular Search Using ng2-search-filter';
  searchText;

}
