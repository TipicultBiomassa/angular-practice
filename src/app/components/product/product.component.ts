import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input('product') product: IProduct = {
    id: 1,
    title: 'Tempo',
    rating: { rate: 5, count: 5 },
  };

  details = false;
}
