import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Watch, IWatchResponse } from '../../model/watch';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {
  filteredUsers: Observable<IWatchResponse>;
  usersForm: FormGroup;
  constructor(private fb: FormBuilder, private appService: SearchService) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      userInput: null
    })

    this.filteredUsers = this.usersForm.get('userInput').valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.appService.search({name: value}, 1))
      );
  }

}
