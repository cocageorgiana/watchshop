import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WatchesListComponent } from './watches-list/watches-list.component';
import { WatchesDescriptionComponent } from './watches-description/watches-description.component';
import { WatchesComponent } from './watches/watches.component';
import { WatchesRoutingModule } from './watches-routing.module';

@NgModule({
  declarations: [
    WatchesListComponent,
    WatchesDescriptionComponent,
    WatchesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WatchesRoutingModule,
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
export class WatchesModule { }
