import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { ProductTypeComponent } from './product-type/product-type.component';
import { BestSellingProductsModule } from './best-selling-products/best-selling-products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule, ProductTypeComponent, BestSellingProductsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'comestic-products';

  productTypes = [
    {id: 0, name: 'SERUM', imgUrl: 'assets/images/product_type1.svg', imgAlt: 'product_type1'},
    {id: 1, name: 'CLEANSER', imgUrl: 'assets/images/product_type2.svg', imgAlt: 'product_type2'},
    {id: 2, name: 'CREAM', imgUrl: 'assets/images/product_type3.svg', imgAlt: 'product_type3'},
  ]
}
