import { NavLink } from "react-router-dom";
import "../css/about.css";
const ResetPassword = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
            <div className="block-account">
              <h5 className="title-account margin-top-10">Trang tài khoản</h5>
              <p>
                Xin chào, <span>Vương Quân</span>&nbsp;!
              </p>
              <ul>
                <NavLink to="/UserProfile">
                  <p>Thông tin tài khoản</p>
                </NavLink>
                <NavLink to="/ResetPassword">
                  <p>Đổi mật khẩu</p>
                </NavLink>
                <NavLink to="/#">
                  <p>Đăng xuất</p>
                </NavLink>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
            <h1 className="title-head margin-top-0">Đổi mật khẩu</h1>
            <div className="page-login">
              <form>
                <input
                  name="FormType"
                  type="hidden"
                  defaultValue="change_customer_password"
                />
                <input name="utf8" type="hidden" defaultValue="true" />
                <p>
                  Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí
                  tự
                </p>
                <div className="form-signup clearfix">
                  <fieldset className="form-group mt-3">
                    <label htmlFor="oldPass">
                      Mật khẩu cũ <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Mật khẩu cũ"
                      name="OldPassword"
                      id="OldPass"
                      required
                      className="form-control form-control-lg"
                    />
                  </fieldset>
                  <fieldset className="form-group mt-3">
                    <label htmlFor="changePass">
                      Mật khẩu mới <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Mật khẩu mới"
                      name="Password"
                      id="changePass"
                      required
                      className="form-control form-control-lg"
                    />
                  </fieldset>
                  <fieldset className="form-group mt-3 ">
                    <label htmlFor="confirmPass">
                      Xác nhận lại mật khẩu{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Xác nhận lại mật khẩu"
                      name="ConfirmPassword"
                      id="confirmPass"
                      required
                      className="form-control form-control-lg"
                    />
                  </fieldset>
                  <button type="submit" className="btn btn-danger mt-3">
                    Đặt lại mật khẩu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
