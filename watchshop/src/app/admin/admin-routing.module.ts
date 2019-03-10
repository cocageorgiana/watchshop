import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent

  }
];

@NgModule({
  imports: [BrowserModule,
     RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
