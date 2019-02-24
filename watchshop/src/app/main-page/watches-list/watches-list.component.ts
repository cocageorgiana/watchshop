import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watches-list',
  templateUrl: './watches-list.component.html',
  styleUrls: ['./watches-list.component.scss']
})
export class WatchesListComponent implements OnInit {

  public watches: any[] = [
    {'id': '1', 'name': 'Atlantic', 'price': '3000$ ', 'stars': '3', 'image': 'Atlantic'},
    {'id': '2', 'name': 'Rolex', 'price': '5000$ ', 'stars': '5', 'image': 'Rolex'},
    {'id': '3', 'name': 'Cartier', 'price': '1500$ ', 'stars': '3', 'image': 'Cartier'}];

  constructor() { }

  ngOnInit() {
  }

}
