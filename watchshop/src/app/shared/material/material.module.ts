import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatGridListModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatSidenavModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
