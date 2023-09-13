import React from "react";
import { useCart } from "react-use-cart";

// import { NavLink } from "react-router-dom";

const Item = (props: any) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="col-lg-3 mb-3 ">
        <div className="card p-0 overflow-hidden h-90 w-75  shadow">
          <img src={props.img} className="card-img-top img-fluid" alt="" />
          <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-text">{props.price} vnd</h5>
            <p className="card-text">{props.desc}</p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
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

          {/* Modal */}
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

          {/* Modal2 */}
          <div
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
