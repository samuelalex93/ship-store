import { ActionModel } from "../models/action.model";
import { CartModel } from "../models/cartModel.model";
import { Product } from "../models/product.model";
import { ActionTypes } from "./action.store";

export const cart = new CartModel();

export function cartReducer(state: any = cart, action: ActionModel | any) {
    switch (action.type) {
        case ActionTypes.Add:
            {
              state = {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            };
            return {
                ...state,
                total: calculateTotalWeight(state.products)
            };
            };

        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload);
                let products = state.products.slice();
                products.splice(index, 1);
                return {
                    ...state,
                    products: products,
                    total: calculateTotalWeight(products)
                };
            };

        case ActionTypes.Clear:
            {
                state = new CartModel();
                state.total = calculateTotalWeight(state.products);
                return state;
            }

        default:
            return state;
    }
}

function calculateTotalWeight(products: Product[]): number {
    let total: number = 0;
    products.forEach(product => {
        total += product.weight_kg;
    });
    return total;
}