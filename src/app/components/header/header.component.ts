import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from '../../models/cartModel.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<{cart: CartModel}>
  ) { 
    this.cart$ = this.store.pipe(select('cart'));
  }

  ngOnInit(): void {
  }

}
