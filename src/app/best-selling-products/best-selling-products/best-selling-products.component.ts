import { Component } from '@angular/core';

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styles: ``
})

export class BestSellingProductsComponent {
  bestSellingProducts = [
    { id: 0, name: 'Radiance Glow Serum', price: '40.00', imgUrl: 'assets/images/product1.svg', imgAlt: 'product1' },
    { id: 0, name: 'Radiance Glow Serum', price: '30.00', imgUrl: 'assets/images/product2.svg', imgAlt: 'product2' },
    { id: 0, name: 'Radiance Glow Serum', price: '20.00', imgUrl: 'assets/images/product3.svg', imgAlt: 'product3' },
  ]
}
