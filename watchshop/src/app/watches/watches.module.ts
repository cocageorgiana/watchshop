import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WatchesListComponent } from './watches-list/watches-list.component';
import { WatchesDescriptionComponent } from './watches-description/watches-description.component';
import { WatchesComponent } from './watches/watches.component';
import { WatchesRoutingModule } from './watches-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    WatchesListComponent,
    WatchesDescriptionComponent,
    WatchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    WatchesRoutingModule,
    Ng2SearchPipeModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    WatchesListComponent,
    WatchesDescriptionComponent,
    WatchesComponent
  ]
})
export class WatchesModule {
 }

