import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, AdminComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [
    UsersComponent,
    AdminComponent,
    AddProductComponent,
    EditProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AdminModule { }
