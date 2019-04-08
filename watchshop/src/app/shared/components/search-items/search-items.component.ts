import { WatchesListComponent } from './../../../watches/watches-list/watches-list.component';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup   } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Watch, IWatchResponse } from '../../model/watch';
import { debounceTime, switchMap, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  ngOnInit() {

    }

}
