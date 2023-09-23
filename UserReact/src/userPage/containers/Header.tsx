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
              <NavLink className="navbar-brand text-white-50" to="/UserProfile">
                <i className="bi bi-person" />
              </NavLink>
              <NavLink className="navbar-brand text-white-50" to="/Login">
                <i className="bi bi-box-arrow-in-right"></i>
              </NavLink>
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
