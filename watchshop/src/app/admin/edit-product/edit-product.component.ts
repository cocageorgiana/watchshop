import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Advertisement } from 'src/app/shared/model/advertisement';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {


  editForm: FormGroup;
  registrations: Advertisement[] = [];
  regModel: Advertisement;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  constructor() {
    this.registrations.push(new Advertisement('Rolex', 'test1', 500 ));
    this.registrations.push(new Advertisement('Cartier', 'test2', 22));
    this.registrations.push(new Advertisement('Omega', 'test3', 300));
  }

  ngOnInit() {}

  onNew() {
    this.regModel = new Advertisement();
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave() {
    if (this.submitType === 'Save') {
      this.registrations.push(this.regModel);
    } else {
      this.registrations[this.selectedRow].title = this.regModel.title;
      this.registrations[this.selectedRow].description = this.regModel.description;
      this.registrations[this.selectedRow].price = this.regModel.price;
    }
    this.showNew = false;
  }

  onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Advertisement();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }

  onCancel() {
    this.showNew = false;
  }


}
