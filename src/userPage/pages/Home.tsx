import React from "react";
import "../css/home.css";

// import into from "../plugin/clip.mp4";
// import Footer from '../components/Footer';
// import img3 from './images/03.jpg';
// import img4 from './images/04.jpg';
// import img5 from './images/05.jpg';
// import img6 from './images/06.jpg';

const Home = () => {
  return (
    <>
      <div className="card  text-white  border-0">
        <img
          src={require("../images/background1.jpg")}
          alt=""
          className="img-fluid"
          style={{ height: "345px", width: "100%" }}
        />
        <div
          className="card-img-overlay text-center align-content-center col-6 mx-auto "
          id="textBackground"
        >
          <h5 className="card-title">
            <p>About Us</p>
          </h5>
          <p className="card-text">
            Lấy cảm hứng từ lối sống và văn hóa thưởng thức cafe của thành phố
            “Hòn ngọc Viễn Đông”, GrandCoffee chính là sự kết hợp của nét xưa cũ
            nhưng được cách điệu theo phong cách hiện đại.
          </p>
        </div>
      </div>

      <div className="container py-3 mt-3">
        <div className="row">
          <div className="col-auto" id="logo2">
            <span className="">
              <img
                src={require("../images/zyro-image.png")}
                alt=""
                style={{ width: "200px" }}
              />
              <p></p>
              <p></p>
            </span>
            <span id="showCase">
              {/* <video src={video2}  controls autoPlay muted loop> </video> */}
              <h1 className="title"> Grand Coffee</h1>
            </span>
          </div>
        </div>
      </div>

      <div className="text-danger container">
        <div className=" card border border-1 border-danger"></div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h5 id="textsp">Caffe</h5>
            <img
              src={require("../drink/cf-logo.png")}
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col">
            <h5 id="textsp">Trà Sữa</h5>
            <img
              src={require("../drink/ts-logo.png")}
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col">
            <h5 id="textsp">Hồng Trà</h5>
            <img
              src={require("../drink/tc-logo.png")}
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col">
            <h5 id="textsp">Nước Ép</h5>
            <img
              src={require("../drink/soda-logo.png")}
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
      <section id="section" className="">
        <br />
        <h3 className="text-center text-white">
          <b>Tin Tức & Sự Kiện</b>{" "}
        </h3>{" "}
        <br />
        <div className="container">
          <div className="row ">
            <div className="col">
              <div className="card" id="section">
                <img
                  src={require("../images/pic-1.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body ">
                  <h5 className="card-title text-white">
                    Thông Báo Lịch Hoạt Động
                  </h5>
                  <p className="card-text text-white-50">
                    THÔNG BÁO LỊCH NGHỈ TẾT 2023
                    <br />
                    coffeE Shop xin trân trọng phục vụ qúy khách xuyên Tết
                    Nguyên Đán 2023...
                  </p>
                  <a href="/#" className="btn btn-primary">
                    Tìm Hiểu Thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" id="section">
                <img
                  src={require("../images/pic-2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body ">
                  <h5 className="card-title text-white">
                    Khuyễn Mãi Thanh Toán
                  </h5>
                  <p className="card-text text-white-50">
                    Giảm 10% Khi Thanh Toán Bằng Zalo Pay <br />
                    Khyến Mãi 10% khi thanh toán bằng ví ZaloPay tại của hàng
                    chỉ bạn cần nhập mã...
                  </p>
                  <a href="/#" className="btn btn-primary">
                    Tìm Hiểu Thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" id="section">
                <img
                  src={require("../images/pic-3.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body ">
                  <h5 className="card-title text-white">
                    Thức Uống Từ Hoa Quả Mới{" "}
                  </h5>
                  <p className="card-text text-white-50">
                    Trà Trái cây Mix Vị <br />
                    CoffeE Shop xin được han hạn giới thiệu thức uống làm từ
                    trái cây tươi 100% ...
                  </p>
                  <a href="/#" className="btn btn-primary">
                    Tìm Hiểu Thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
