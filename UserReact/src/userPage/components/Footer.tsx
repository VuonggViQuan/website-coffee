import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="" id="footer">
          <div className="container py-2 text-light text-opacity-50">
            <div className="row py-3">
              <div className="col-12 col-lg-4 ">
                <img
                  src={require("../images/zyro-image.png")}
                  alt=""
                  style={{ width: "50%" }}
                  className="m-4 p-3"
                />
              </div>

              <div className="col-12 col-lg-4">
                <p className="h5 text-white pb-2"> Liên hệ </p>
                <p className="text-white">
                  <i className="bi bi-envelope text-white " /> Email:
                  GrandCoffee@gmail.com <br />
                  <i className="bi bi-geo-alt-fill text-white" />{" "}
                  <b>Representative:</b> 181 Cao Thắng, Phường 12, Quận 10,
                  Thành Phố Hồ Chí Minh. <br />
                  <i className="bi bi-geo-alt-fill  text-white" />{" "}
                  <b>Working Office:</b> 100/52 đường số 3 Phường 9, Quận Gò
                  Vấp, Thành Phố Hồ Chí Minh. <br />
                  <i className="fa-sharp fa-solid bi-phone  text-white " />{" "}
                  <b>Customer Service</b>: 093986****.
                </p>
                <p className="h5 text-white pb-1    "> Hỗ Trợ Về Chính Sách </p>
                <p className="text-white">
                  {" "}
                  - Quy chế hoạt động và chính sách bảo mật <br />
                  - Chính sách vận chuyển <br />- Chính sách thanh toán{" "}
                </p>
              </div>

              <div className="col-12 col-lg-4">
                <p className="h5 text-white">Về Chúng Tôi</p>
                <hr className="text-white bg-secondary" />
                <p className="text-white">
                  GrandCoffee là chuỗi cà phê được lấy cảm hứng từ tinh hoa văn
                  hoá và phong cách thưởng thức cà phê của Sài Gòn xưa pha lẫn
                  với sự hiện đại và những phong vị mới mẻ của cuộc sống mới.
                </p>
                <div className="text-white pt-3">
                  <i className="fab bg-black p-2 bi bi-facebook" />
                  <i className="fab bg-black p-2 bi bi-instagram" />
                  <i className="fab bg-black p-2 bi bi-twitter" />
                </div>
                <p className="text-white p-1">
                  {" "}
                  <br />
                  Giấy chứng nhận Đăng kí kinh doanh số 031661*** do Sở kế hoạch
                  và đầu tư. Thành phố Hồ Chí Minh cấp ngày 15/09/2023.
                </p>
              </div>

              <hr className="text-white bg-secondary" />
              <div className="position-relative">
                <div className="container text-light text-opacity-50 ">
                  <div className="row">
                    <span>
                      ©GrandCoffee 2023 | All rights reserved. Website by
                      GrandCoffee.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
