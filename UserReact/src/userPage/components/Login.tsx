import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ResponseWrapper from './../services/responseWrapper';
import { json } from "stream/consumers";
import userService from "../services/userService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const userInformation = {email, password};
      userService.login(email, password).then((res) => {   
        // console.log(res.errorCode);
        if(res.errorCode === 0) {
          console.log(res.data);
          alert("Login successfully!");
          navigate("/")   
        }else {
          console.log(res)
          alert("Wrong email or password! Please try again")
        }
      })
      // fetch("http://127.0.0.1:8000/user/login", {
      //   method: "POST",
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify(userInformation)
      // }).then((rs) => {
        
      //     console.log(rs.json);
      // })
      // .catch(() => {
      //   alert("Incorrect email or password! Please try again");
      //   navigate("/login")
      // })
    
     

    }
   
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
                      <form method="post" onSubmit={handleSubmit}>
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
                          <b>Đăng nhập</b>
                        </h3>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Mật khẩu
                          </label>
                          <input
                            name="password"
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="my-2">
                          <button
                            className="btn btn-dark btn-lg btn-block col-3"
                            type="submit"
                          >
                            Đăng Nhập
                            {/* <NavLink to="/" className="text-white">
                              Đăng nhập
                            </NavLink> */}
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>{" "}
                        <br />
                        <p className="mb-5 pb-lg-2">
                          Don't have an account?{" "}
                          <a href="/register" className="text-primaty">
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


// export default Login;
