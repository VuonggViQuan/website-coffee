import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const Checkout = () => {
    const {
        items,
        totalItems,
        cartTotal,
    } = useCart();
    return ( <>
    <main role="main">
    {/* Block content - Đục lỗ trên giao diện bố cục chung, đặt tên là `content` */}
    <div className="container col-10">
        <form className="needs-validation" name="frmthanhtoan" method="post" action="#">
        <input type="hidden" name="kh_tendangnhap" defaultValue="dnpcuong" />
        <div className="py-5 text-center">
            <h2>Thanh toán</h2>
            <p className="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
        </div>
        <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3 py-2">
                <span className="text-muted">Giỏ hàng</span>
                <span className='col-1 p-1' id='sl'>{totalItems}</span>
            </h4>

            <div className="list-group mb-3">
                {items.map((item, index)=>{
                    return( <>
                        <div key={index}>
                                <div className="list-group-item d-flex justify-content-between ">
                                    <h6 className="my-0">{item.title}</h6>
                                    <small className="text-muted">{item.price} x {item.quantity}</small>
                                </div>
                        </div>
                        
                    </>)})}
                    <div className="list-group-item d-flex justify-content-between ">
                                <span>Tổng thành tiền</span>
                                <strong>{cartTotal}(vnd)</strong>
                        </div>
            </div>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Mã khuyến mãi" />
                <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Xác nhận</button>
                </div>
            </div>
            </div>
            <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Thông tin khách hàng</h4>
            <div className="row">
                <div className="col-md-12">
                <label htmlFor="kh_ten">Họ tên</label>
                <input type="text" className="form-control" name="kh_ten" id="kh_ten" defaultValue="Dương Nguyễn Phú Cường" />
                </div>
                <div className="col-md-12">
                <label htmlFor="kh_gioitinh">Giới tính</label>
                <input type="text" className="form-control" name="kh_gioitinh" id="kh_gioitinh" defaultValue="Nam" />
                </div>
                <div className="col-md-12">
                <label htmlFor="kh_diachi">Địa chỉ</label>
                <input type="text" className="form-control" name="kh_diachi" id="kh_diachi" defaultValue="130 Xô Viết Nghệ Tỉnh" />
                </div>
                <div className="col-md-12">
                <label htmlFor="kh_dienthoai">Điện thoại</label>
                <input type="text" className="form-control" name="kh_dienthoai" id="kh_dienthoai" defaultValue="0985900000" />
                </div>
                <div className="col-md-12">
                <label htmlFor="kh_email">Email</label>
                <input type="text" className="form-control" name="kh_email" id="kh_email" defaultValue="phucuong@ctu.edu.vn" />
                </div>
                <div className="col-md-12">
                <label htmlFor="kh_ngaysinh">Ngày sinh</label>
                <input type="text" className="form-control" name="kh_ngaysinh" id="kh_ngaysinh" defaultValue="11/6/1989" />
                </div>
                <div className="col-md-12">
                <label htmlFor="kh_cmnd">CMND</label>
                <input type="text" className="form-control" name="kh_cmnd" id="kh_cmnd"  />
                </div>
            </div>
            <h4 className="mb-3">Hình thức thanh toán</h4>
            <div className="d-block my-3">
                <div className="custom-control custom-radio">
                <input id="httt-1" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={1} />
                <label className="custom-control-label" htmlFor="httt-1">Tiền mặt</label>
                </div>
                <div className="custom-control custom-radio">
                <input id="httt-2" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={2} />
                <label className="custom-control-label" htmlFor="httt-2">Chuyển khoản</label>
                </div>
                <div className="custom-control custom-radio">
                <input id="httt-3" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={3} />
                <label className="custom-control-label" htmlFor="httt-3">Ship COD</label>
                </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block">
                <Link className="text-black" to=""> Đặt hàng</Link></button>
            </div>
        </div>
        </form>
    </div>
    {/* End block content */}
</main>

    </> );
}
 
export default Checkout;