import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../shared/material/material.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { WatchesModule } from '../watches/watches.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LayoutComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NavigationRoutingModule,
    AdminRoutingModule,
    WatchesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LayoutComponent
  ]
})
export class NavigationModule { }
