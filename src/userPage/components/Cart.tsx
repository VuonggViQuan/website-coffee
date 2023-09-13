import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import "../css/cart.css";
// import { CartProvider, useCart } from 'react-use-cart';
// import Product from '../pages/Product';

const Cart = () => {
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <h1 className="text-center text-danger py-3" id="title">
        Giỏ hàng của bạn hiện đang trống
      </h1>
    );
  return (
    <>
      <div className="container col-10 py-3 " id="title">
        <h1 className="text-center text-success">Đơn Hàng Của Bạn</h1>
        <table className="table table-light table-hover ">
          <tbody>
            <tr>
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Đơn Giá</th>
              <th>Số Lượng</th>
              <th>Edit</th>
            </tr>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.img} style={{ height: "5rem" }} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} (vnd)</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-info col-2 m-1"
                      onClick={(e)=> updateItemQuantity(
                        (item.id: number), (item.quantity: number) - 1): void}
                    >
                      -
                    </button>
                    <button className="btn btn-info col-2 m-2">+</button>
                    <button
                      className="btn btn-danger col-2"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td>
                <h5 className="m-2">Tổng SL: {totalItems}</h5>
              </td>
              <td>
                <h5 className="m-2">
                  <b className="text-danger">Tổng Tiền: {cartTotal} (vnd)</b>
                </h5>
              </td>
              <td></td>
              <td className="col-3">
                <button
                  className="btn btn-danger col-auto m-1"
                  id="addSP"
                  onClick={() => emptyCart()}
                >
                  Xóa Tất Cả
                </button>
                {/* <button className='btn btn-primary col-3' >Oder</button> */}
              </td>
              {/* Số Loại: {totalUniqueItems} | */}
            </tr>
          </tbody>
        </table>
        <div className="">
          <button className="btn btn-danger btn-md">
            <i className="bi bi-arrow-left-circle"></i>&nbsp;
            <NavLink to="/" className="text-white">
              Quay về trang chủ
            </NavLink>
          </button>
          &nbsp;
          <button className="btn btn-primary btn-md ">
            <i className="bi bi-bag-check-fill"></i>&nbsp;
            <NavLink to="/Checkout" className="text-white">
              Thanh Toán
            </NavLink>
          </button>
          &nbsp;
        </div>
      </div>
    </>
  );
};

export default Cart;
