import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [BestSellingProductsComponent],
  imports: [CommonModule, ProductModule],
  exports: [BestSellingProductsComponent]
})

export class BestSellingProductsModule { }
