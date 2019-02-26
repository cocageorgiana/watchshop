import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WatchesListComponent } from './watches-list/watches-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WatchesDescriptionComponent } from './watches-description/watches-description.component';

@NgModule({
  declarations: [
    WatchesListComponent,
    MainPageComponent,
    WatchesDescriptionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainPageRoutingModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class MainPageModule { }
