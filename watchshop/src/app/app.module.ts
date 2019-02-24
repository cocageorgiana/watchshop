import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/material/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { MainPageModule } from './main-page/main-page.module';
import { AdminModule } from './admin/admin.module';
import { WatchService } from './shared/services/WatchService';

import { HttpClient} from '@angular/common/http';

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
    MainPageModule,
    AdminModule
  ],
  providers: [
    WatchService,
    HttpClient
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
