/* eslint-disable jsx-a11y/iframe-has-title */
const About = () => {
  return (
    <>
      <div className="container py-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0 text-center">Liên Hệ Tôi Nếu Bạn Cần</h3>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="bg-light mb-3" style={{ padding: 30 }}>
              <div className="d-flex align-items-center mb-3">
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">
                    <b>Liên lạc</b>
                  </h6>
                  <p className="h6">
                    Nếu bạn cần hỗ trợ, đóng góp hoặc khiếu nại bạn có thể liên
                    hệ với tôi qua những Liên Lạc dưới đây hoặc gửi mail cho tôi
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">
                    <b>Vị Trí</b>{" "}
                  </h6>
                  <p className="m-0">123 Quang Trung, Quận 12, TP. HCM</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="fa fa-2x fa-envelope-open text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">
                    <b>Email</b>
                  </h6>
                  <p className="m-0">info@example.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="fas fa-2x fa-phone-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">
                    <b>Đường dây nóng</b>
                  </h6>
                  <p className="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form bg-light mb-3" style={{ padding: 30 }}>
              <form name="sentMessage" id="contactForm">
                <div className="form row">
                  <div className="col-md-6">
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Họ Và Tên"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        placeholder="Địa Chỉ Email"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="subject"
                    placeholder="Tiêu Đề"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={4}
                    id="message"
                    placeholder="Nội Dung"
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-semi-bold px-4"
                    style={{ height: 50 }}
                  >
                    Gửi Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center">Vị Trí Cửa Hàng</h1>
      <div className="map-box container-fluid m-2">
        <div id="map">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2086305783848!2d106.6284797484953!3d10.855834255829674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298a885e0639%3A0x1d24a0768317d4f6!2zMTDCsDUxJzIxLjAiTiAxMDbCsDM3JzQ3LjkiRQ!5e0!3m2!1svi!2s!4v1653488737314!5m2!1svi!2s"
              width={600}
              height={500}
              frameBorder={0}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
