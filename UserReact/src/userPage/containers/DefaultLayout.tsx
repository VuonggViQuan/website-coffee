import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import { CartProvider } from "react-use-cart";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.component} />
          ))}
        </Routes>
        {}
      </CartProvider>
      <Footer />
    </>
  );
};

export default DefaultLayout;
