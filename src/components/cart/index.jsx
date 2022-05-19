import React, {useEffect} from "react";

//styles
import s from "./index.module.scss";
import {Button, List} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart/cartActions";
import {selectTotalPrice} from "../../store/cart/cartSelector";
import {useNavigate} from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state => state.cart);
  const navigation = useNavigate();

  const calculatePrice = (orders) => {
    if (orders === undefined) {
      return 0;
    } else if (orders.length === 0) {
      return 0;
    } else {
      return orders.reduce((acc, curr) => {
        return acc + (curr.count * curr.price);
      }, 0);
    }
  };

  const onAddItem = () => {
    dispatch(cartActions.setItem({id: 1, count: 2, price: 250}));
  };

  const onIncrementItem = (id) => {
    dispatch(cartActions.incrementItem(id));
  };

  const onDecrementItem = (id) => {
    dispatch(cartActions.decrementItem(id));
  };

  console.log(cartList)


  return (
    <>
      <List className={s.cart}>
        {cartList.map((item) => {
          return (
            <List.Item actions={[
              <div>{item.name}</div>,
              <Button size="small" onClick={() => onIncrementItem(item.id)} type="primary">+</Button>,
              <div>{item.count}</div>,
              <Button size="small" onClick={() => onDecrementItem(item.id)} type="ghost">-</Button>
            ]}>
              {/*<List.Item.Meta title={item.name} />*/}
            </List.Item>
          )
        })}
      </List>
      <div>
        {calculatePrice(cartList)}
      </div>
      <Button onClick={() => navigation("/cart")}>
        Перейти в корзину
      </Button>
    </>
  );
};

export default Cart;
