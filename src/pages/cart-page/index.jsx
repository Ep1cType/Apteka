import React, {useState} from "react";
import ContentWrapper from "../../components/content-wrapper";

import s from "./index.module.scss";
import {Button, List, Steps} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart/cartActions";

const CartPage = () => {
  const {cartList} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(0);

  const onIncrementCount = (id) => {
    dispatch(cartActions.incrementItem(id));
  };

  const onDecrementCount = (id) => {
    dispatch(cartActions.decrementItem(id));
  };

  const calculatePrice = (orders) => {
    if (orders === undefined) {
      return 0;
    } else if (orders.length === 0) {
      return 0;
    } else {
      return orders.reduce((acc, curr) => {
        return acc + (curr.count*curr.price);
      }, 0);
    }
  };

  return (
    <ContentWrapper>
      <section className={s.section}>
        <h1>Корзина</h1>
        <Steps current={currentStep} className={s.steps}>
          <Steps.Step onClick={() => setCurrentStep(0)} title="Подтверждения заказа"/>
          <Steps.Step onClick={() => setCurrentStep(1)} title="Оформление заказа"/>
          <Steps.Step onClick={() => setCurrentStep(2)} title="Оплата"/>
        </Steps>
        <div>
          {currentStep === 0 && (
            <>
              <List
                className={s.list}
                dataSource={cartList}
                renderItem={item => (
                  <List.Item actions={[
                    <Button type="primary" onClick={() => onIncrementCount(item.id)}>+</Button>,
                    <div>{item.count} x {item.price}</div>,
                    <Button onClick={() => onDecrementCount(item.id)}>-</Button>
                  ]}>
                    <List.Item.Meta title={item.name}/>
                  </List.Item>
                )}
              >
              </List>
              <div className={s.footer}>
                <div>Итого: {calculatePrice(cartList)} Рублей</div>
                <Button type="primary" disabled={!cartList.length} onClick={() => setCurrentStep(1)}>Подтвердить заказ</Button>
              </div>
            </>
          )}
        </div>
      </section>
    </ContentWrapper>
  );
};

export default CartPage;
