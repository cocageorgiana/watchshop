import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchesListComponent } from './main-page/watches-list/watches-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
