import { NavLink } from "react-router-dom";
import "../css/about.css";
const UserProfile = () => {
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
            <h1 className="title-head margin-top-10">Thông tin tài khoản</h1>
            <div className="form-signup name-account m992">
              <p>
                <strong>Họ tên:</strong> Vương Quân
              </p>
              <p>
                <strong>Email:</strong> shiroquan9675@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
