import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WatchService } from 'src/app/shared/services/watch.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Output() onAdd = new EventEmitter();


  submitType: string = 'Save';
  addWatch: Boolean = true;

  constructor() { }

  ngOnInit() {

  }

  onNew() {
    this.submitType = 'Save';
    this.onAdd.emit(this.addWatch);
  }

}
