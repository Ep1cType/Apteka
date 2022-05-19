import {createSelector} from "reselect";

const selectCartItems = state => state.cart.cartList;

export const selectTotalPrice = createSelector(selectCartItems, items => {
    return items.reduce((subtotal, item) => subtotal + item.count, 0);
  }
);

