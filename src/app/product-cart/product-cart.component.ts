import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;

  constructor() { }

  ngOnInit() {
  }

}
