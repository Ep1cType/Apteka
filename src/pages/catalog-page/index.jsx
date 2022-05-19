import React, {useEffect, useState} from "react";
import {Button, Card, Menu} from "antd";

import s from "./index.module.scss";
import ContentWrapper from "../../components/content-wrapper";
import {list} from "../../utils/data";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart/cartActions";
import Search from "antd/es/input/Search";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state => state.cart);

  const [itemList, setItemList] = useState(list);
  const [input, setInput] = useState("");

  const onAddToCard = (item) => {
    dispatch(cartActions.setItem(item));
  };

  useEffect(() => {

  }, []);

  const onSearch = () => {
    setItemList(list.filter((el) => el.name.includes(input)));
  };

  return (
    <ContentWrapper>
      <div className={s.catalog}>
        <aside className={s.catalog__menu}>
          <Search
            placeholder="Введите название"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onSearch={onSearch}
          />
          <Menu
            mode="vertical"
            items={[{label: "hello"}]}
          />
        </aside>
        <section className={s.section}>
          <h1>Каталог товаров</h1>
          <div className={s.catalog__list}>
            {itemList.length ? itemList.map((item) => (
                <Card
                  key={item.id}
                  type="inner"
                  bordered
                  hoverable
                  cover={<img style={{padding: 1}} src={item.image} alt={item.name}/>}
                >
                  <Card.Meta title={item.name}/>
                  <span style={{margin: "10px 0", display: "block"}}>{item.price + " Руб."}</span>
                  <Button disabled={cartList.some((it) => it.id === item.id)} onClick={() => onAddToCard(item)}
                          type="primary">
                    {cartList.some((it) => it.id === item.id)
                      ?
                      <span>Добавлено в корзину</span>
                      :
                      <span>Добавить в корзину</span>
                    }
                  </Button>

                </Card>
              ))
              : (
                <span>Ничего не найдено</span>
              )
            }
          </div>
        </section>
      </div>

    </ContentWrapper>
  );
};

export default CatalogPage;
