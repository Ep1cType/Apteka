import {DECREMENT_CART_ITEM, INCREMENT_CART_ITEM, REMOVE_CART_ITEM, SET_CART_ITEM} from "./cartTypes";


export const cartActions = {
  setItem: (cartItem) => ({
    type: SET_CART_ITEM,
    payload: cartItem
  }),
  removeItem: (id) => ({
    type: REMOVE_CART_ITEM,
    payload: {id}
  }),
  incrementItem: (id) => ({
    type: INCREMENT_CART_ITEM,
    payload: {id}
  }),
  decrementItem: (id) => ({
    type: DECREMENT_CART_ITEM,
    payload: {id}
  })
}
