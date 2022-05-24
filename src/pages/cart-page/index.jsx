import React, {useState} from "react";
import ContentWrapper from "../../components/content-wrapper";

import s from "./index.module.scss";
import {Button, Input, List, Radio, Steps, Timeline} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart/cartActions";

const CartPage = () => {
  const {cartList} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(0);
  const [currentPay, setCurrentPay] = useState(0);
  const [currentDel, setCurrentDel] = useState(0);

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

  const onSubmitOrder = () => {
    setCurrentStep(2);
    dispatch(cartActions.clearCart());
  };

  return (
    <ContentWrapper>
      <section className={s.section}>
        <h1>Корзина</h1>
        <Steps current={currentStep} className={s.steps}>
          <Steps.Step onClick={() => setCurrentStep(0)} title="Подтверждения заказа"/>
          <Steps.Step onClick={() => setCurrentStep(1)} title="Оформление заказа"/>
          <Steps.Step title="Оплата"/>
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
          {currentStep === 1 && (
            <>
              <div className={s.timeline}>
                <Timeline>
                  <Timeline.Item>
                    <h2>Данные покупателя</h2>
                    <Input className={s.input__name} placeholder="Ф. И. О." />
                  </Timeline.Item>
                  <Timeline.Item style={{display: 'flex', flexDirection: 'column'}}>
                    <h2>Выберите способ получения</h2>
                    <Radio.Group value={currentDel} style={{marginBottom: '20px'}}>
                      <Radio.Button type="dashed" value={0} onClick={() => setCurrentDel(0)}>Самовывоз</Radio.Button>
                      <Radio.Button type="dashed" value={1} onClick={() => setCurrentDel(1)}>Доставка</Radio.Button>
                    </Radio.Group>
                    {currentDel === 1 && (
                      <Input style={{display: 'block', maxWidth: '350px'}} placeholder="Адрес доставки" />
                    )}
                  </Timeline.Item>
                  <Timeline.Item>
                    <h2>Выберите способ оплаты</h2>
                    <Radio.Group value={currentPay}>
                      <Radio.Button type="dashed" value={0} onClick={() => setCurrentPay(0)}>При получении</Radio.Button>
                      <Radio.Button type="dashed" value={1} onClick={() => setCurrentPay(1)}>В Кредит</Radio.Button>
                    </Radio.Group>
                  </Timeline.Item>
                </Timeline>
              </div>
              <div className={s.footer}>
                <Button type="link" onClick={() => setCurrentStep(0)}>Назад</Button>
                <Button type="primary" disabled={!cartList.length} onClick={onSubmitOrder}>Оформить заказ</Button>
              </div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className={s.success}>
                <h2>Успешно</h2>
                <p>
                  Ваш заказ будет доставлен в бижайшее время !
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </ContentWrapper>
  );
};

export default CartPage;
