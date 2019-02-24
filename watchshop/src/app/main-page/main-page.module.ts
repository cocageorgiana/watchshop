import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { WatchesListComponent } from './watches-list/watches-list.component';
import { WatchesDescriptionComponent } from './watches-description/watches-description.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    WatchesListComponent,
    WatchesDescriptionComponent,
    MainPageComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
