import {CLEAR_CART, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM, REMOVE_CART_ITEM, SET_CART_ITEM} from "./cartTypes";

const initialState = {
  cartList: [],
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ITEM: {
      const item = {
        ...action.payload,
        count: 1,
      };

      return {
        ...state,
        cartList: [...state.cartList, item]
      };
    }
    case REMOVE_CART_ITEM: {
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload.id)
      };
    }
    case INCREMENT_CART_ITEM: {
      return {
        ...state,
        cartList: state.cartList.map((item) => item.id === action.payload.id ? {...item, count: item.count + 1} : item)
      };
    }
    case DECREMENT_CART_ITEM: {
      return {
        ...state,
        cartList: state.cartList.map((item) => item.id === action.payload.id
          ?
          {
            ...item,
            count: item.count - 1
          }
          : item
        ).filter((item) => item.count > 0)
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cartList: [],
        totalPrice: 0
      };
    }
    default:
      return state;
  }
}
