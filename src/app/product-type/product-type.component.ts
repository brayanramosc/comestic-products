import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-type',
  standalone: true,
  imports: [],
  templateUrl: './product-type.component.html',
  styles: ``
})

export class ProductTypeComponent {
  @Input() name!: string;
  @Input() imgUrl!: string;
  @Input() imgAlt!: string;
}
