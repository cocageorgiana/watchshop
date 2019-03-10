import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { WatchesRoutingModule } from '../watches/watches-routing.module';

const routes: Routes = [
  {
    path: 'navigation',
    component: NavigationComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
    WatchesRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavigationRoutingModule { }
