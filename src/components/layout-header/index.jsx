import React from "react";

import s from "./index.module.scss";

import ContentWrapper from "../content-wrapper";
import LogoIcon from "../../icons/logo.svg";
import {Link} from "react-router-dom";
import {Badge, Popover} from "antd";
import Cart from "../cart";
import {useSelector} from "react-redux";

const LayoutHeader = () => {
  const {cartList} = useSelector(state => state.cart);

  return (
    <header className={s.header}>
      <ContentWrapper>
        <div className={s.content}>
          <Link to="/">
            <img className={s.logo} src={LogoIcon} width={16} height={16} alt="Логотип"/>
          </Link>
          <nav className={s.nav}>
            <ul className={s.nav__list}>
              <Link to="/">
                <li className={s.nav__item}>
                  Главная
                </li>
              </Link>
              <Link to="catalog">
                <li className={s.nav__item}>
                  Каталог
                </li>
              </Link>
            </ul>

            <Popover
              title="Товары в корзине"
              trigger="click"
              className={s.cart}
              content={<Cart/>}
            >
              <Badge count={cartList.length}>
                Корзина
              </Badge>
            </Popover>
          </nav>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default LayoutHeader;
