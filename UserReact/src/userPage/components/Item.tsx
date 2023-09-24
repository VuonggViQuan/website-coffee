import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { json } from "stream/consumers";

// import { NavLink } from "react-router-dom";
import Cart from './Cart';
import { useNavigate } from "react-router-dom";


const Item = (props: any) => {
  const { addItem } = useCart();

  const navigate = useNavigate();

  const handleShowProduct = (id: any) => {
    fetch("http://127.0.0.1:8000/user/product/" + id , {
      method: "POST",
      headers: {"Accept":"application/json","Content-Type": "application/json"}
    }).then(() => {
      navigate(`/details/${id}`);
    })
  }

  return (
    <>
      <div className="col-lg-3 mb-3 ">
        <div className="card p-0 overflow-hidden h-90 w-75  shadow">
          <img src= {require(`../drink/${props.img}`)} style={{ height: 250, }} className="card-img-top img-fluid" alt="drink" />
          <div className="card-body text-center">
            <h5 className="card-title">{props.name}</h5>
            <h5 className="card-text">{props.price} vnd</h5>
            <p className="card-text">{props.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleShowProduct(props.id)}
              type="button"
            >
              Chi tiết sản phẩm
            </button>
          </div>
          
          <button
            className="btn btn-primary"
            onClick={() => addItem(props.item)}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Thêm vào Giỏ Hàng
          </button>

     
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-warning">
                  <h4 className="modal-title" id="exampleModalLabel">
                    Thông Báo
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center">
                  Thêm Vào <b className="text-danger">Giỏ Hàng</b> Thành Công
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <a href="/Cart" className="text-white">
                      Đi Tới Giỏ Hàng
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="modal fade col-auto"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header text-warning">
                  <h4 className="modal-title" id="exampleModalLabel2">
                    Chi Tiết Sản Phẩm
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body  row">
                  <div className="col-3">
                    <img
                      src={require("../drink/Cafe-Sua-2.jpg")}
                      alt=""
                      style={{ width: "1000px" }}
                      className=" img-fluid"
                    />
                  </div>
                  <div className="col">
                    <h3 className="text-danger">Coffe Sữa Nóng/Đá</h3>
                    <span>
                      <b>Thông Tin</b>
                    </span>
                    <p className="p-2">
                      Cà phê sữa đá là một loại thức uống thông dụng ở Việt Nam.
                      Cà phê sữa đá truyền thống được làm từ cà phê nguyên chất
                      đựng trong phin với sữa đặc có đường và bỏ đá vào trong
                      một cái ly bằng thủy tinh rồi thưởng thức.
                    </p>
                    <h5>
                      <b>Đơn Giá: </b>22.000 VND
                    </h5>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => addItem(props.item)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Thêm vào Giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Item;
