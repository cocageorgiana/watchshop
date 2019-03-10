import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/material/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { AdminModule } from './admin/admin.module';
import { WatchService } from './shared/services/watch.service';

import { HttpClient} from '@angular/common/http';
import { HeaderComponent } from './navigation/header/header.component';
import { CommonModule } from '@angular/common';
import { WatchesModule } from './watches/watches.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NavigationModule,
    BrowserAnimationsModule,
    AdminModule,
    WatchesModule, FormsModule
  ],
  providers: [
    WatchService,
    HttpClient
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
