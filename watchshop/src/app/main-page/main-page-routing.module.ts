import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WatchesListComponent } from "./watches-list/watches-list.component";
import { WatchesDescriptionComponent } from "./watches-description/watches-description.component";
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatToolbarModule } from '@angular/material';
import { MaterialModule } from '../shared/material/material.module';

const routes: Routes = [
  {
    path: "start-page",
    component: MainPageComponent,
    children: [
      {
        path: "list",
        component: WatchesListComponent
      },
      {
        path: "description",
        component: WatchesDescriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class MainPageRoutingModule {}
