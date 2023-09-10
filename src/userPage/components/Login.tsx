import { NavLink } from "react-router-dom";
import React from "react";

class Login extends React.Component {
  render() {
    return (
      <section className="vh-100" style={{ backgroundColor: "#612f3a" }}>
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
                          <span className="h1 fw-bold mb-0"> Nhóm 7 </span>
                        </div>
                        <h3
                          className="fw-normal mb-3 pb-3 text-danger"
                          style={{ letterSpacing: 1 }}
                        >
                          <b>Login</b>
                        </h3>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="pt-1 mb-4 row">
                          <button
                            className="btn btn-dark btn-lg btn-block col-2"
                            type="button"
                          >
                            <NavLink to="/" className="text-white">
                              Login
                            </NavLink>
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>{" "}
                        <br />
                        <p className="mb-5 pb-lg-2">
                          Don't have an account?{" "}
                          <a href="#!" className="text-primaty">
                            Register here
                          </a>
                        </p>
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

export default Login;
