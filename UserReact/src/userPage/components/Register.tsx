import { NavLink } from "react-router-dom";
import React from "react";

class Register extends React.Component {
  render() {
    return (
      <section className="" style={{ backgroundColor: "#612f3a" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={require("../images/login.jpg")}
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                      alt="login form"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img
                            src={require("../images/zyro-image.png")}
                            className="m-3"
                            alt=""
                            style={{ width: "35px" }}
                          />
                          <span className="h1 fw-bold mb-0"> Coffee </span>
                        </div>
                        <h3
                          className="fw-normal mb-3 pb-3 text-danger"
                          style={{ letterSpacing: 1 }}
                        >
                          <b>Đăng ký</b>
                        </h3>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Tên đăng nhập"
                          />
                        </div>
                        <div className="form-outline mb-4 text-secondary ">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-outline mb-4 text-secondary ">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Mật khẩu"
                          />
                        </div>
                        <div className="form-outline mb-4 text-secondary ">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Nhập Lại Mật Khẩu"
                          />
                        </div>

                        <div className="my-2">
                          <button
                            className="btn btn-dark btn-lg btn-block col-3"
                            type="button"
                          >
                            <NavLink to="/" className="text-white">
                              Đăng ký
                            </NavLink>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
