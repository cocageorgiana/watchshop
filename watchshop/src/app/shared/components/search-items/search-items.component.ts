import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
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
  filteredUsers: Watch[] = [];
  usersForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      userInput: null
    })

    this.usersForm
      .get('userInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(value => this.searchService.search({ name: value }, 1)
          .pipe(
            finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe(users => this.filteredUsers = users.results);
  }

  displayFn(user: Watch) {
    if (user) { return user.name; }
  }

}
