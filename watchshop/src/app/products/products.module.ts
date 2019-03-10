import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductComponent } from "./product/product.component";
import { MaterialModule } from "../shared/material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ProductDetailsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ProductDetailsComponent,
    ProductComponent
  ]
})
export class ProductsModule {}
