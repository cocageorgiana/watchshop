import { HttpClientModule } from '@angular/common/http';
import { NavigationRoutingModule } from './../../navigation/navigation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemsComponent } from './search-items/search-items.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from 'src/app/admin/admin-routing.module';
import { WatchesModule } from 'src/app/watches/watches.module';
import { SearchService } from '../services/search.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [SearchItemsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NavigationRoutingModule,
    AdminRoutingModule,
    WatchesModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SearchItemsComponent
  ],
  providers: [SearchService],
})
export class ComponentsModule { }
