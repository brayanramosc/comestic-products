import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: ``
})

export class ProductCardComponent {
  @Input() name!: string;
  @Input() price!: string;
  @Input() imgUrl!: string;
  @Input() imgAlt!: string;
}
