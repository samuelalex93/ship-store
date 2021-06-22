import { Product } from './product.model';

export class CartModel {
    public products: Product[] = [];
    public total: number = 0;
}