// import {  NavLink } from 'react-router-dom';
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        {/* header */}
        <header className="header_section ">
          <div className="container-fluid">
            <nav className="navbar ">
              <NavLink className="navbar-brand" to="/" id="imgHeader">
                <img
                  src={require("../images/zyro-image.png")}
                  alt=""
                  style={{ width: "50px" }}
                />
              </NavLink>
              <div className=" mx-auto align-items-center ">
                <div className="row">
                  <div className="col-auto" id="navHover">
                    <NavLink to="/Home" className="text-white">
                      <p>Trang Chủ</p>
                    </NavLink>
                  </div>
                  <div className="col"></div>
                  <div className="col-auto" id="navHover">
                    <NavLink to="/About" className="text-white">
                      <p>Thông Tin</p>
                    </NavLink>
                  </div>
                  <div className="col"></div>
                  <div className="col-auto" id="navHover">
                    <NavLink to="/Product" className="text-white">
                      <p>Thực Đơn</p>
                    </NavLink>
                  </div>
                  <div className="col"></div>
                  <div className="col-auto" id="navHover">
                    <a href="/Cart" className="text-white">
                      <p> Đơn Hàng</p>
                    </a>
                  </div>
                  <div className="col "></div>
                  <div className="col-auto" id="navHover">
                    <NavLink to="/Contact" className="text-white">
                      <p>Liên Hệ</p>
                    </NavLink>
                  </div>
                  <div className="col"></div>
                </div>
              </div>

              <div className="btn-group dropleft me-5 border-0">
                <button
                  type="button"
                  style={{ backgroundColor: "tomato" }}
                  className="btn btn-secondary dropdown-toggle  border-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-house me-1 " />
                  Tài khoản
                </button>
                <div className="dropdown-menu">
                  <NavLink to="/UserProfile" className=" dropdown-item">
                    <i className="bi bi-person me-1 " />
                    Thông tin cá nhân
                  </NavLink>
                  <a href="/#">
                    <i className="bi bi-door-open-fill  dropdown-item" />
                  </a>
                </div>
              </div>
            </nav>

            <div className=" text-white-50" id="abheader">
              <div className="row float-end">
                <div className="col-auto">
                  <i className="bi bi-telephone"> 095900xxx</i>
                </div>
                <div className="col-auto">
                  <i className="bi bi-envelope"> GrandCoffee@gmail.com </i>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
