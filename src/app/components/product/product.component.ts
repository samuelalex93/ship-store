import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cartModel.model';
import { Product } from 'src/app/models/product.model';
import { Add, Remove } from 'src/app/store/action.store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<CartModel>) {}
  inCart = false;
  defaultImg = 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/1906/340719-200.png';
  @Input() product!: Product;
  
  addToCart(item: Product) {
      this.store.dispatch(Add(item));
      this.inCart = true;
  }
  
  removeFromCart(item: Product) {
    this.store.dispatch(Remove(item));
    this.inCart = false;
  }
  ngOnInit(): void {
  }

}
