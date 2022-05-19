import React from "react";
import {Routes, Route} from "react-router";
import MainPage from "../pages/main-page";
import LayoutPage from "../layouts/Layout";
import CatalogPage from "../pages/catalog-page";
import CartPage from "../pages/cart-page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />}  />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
