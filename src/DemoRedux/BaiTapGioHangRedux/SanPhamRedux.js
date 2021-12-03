import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    console.log("them gio hang" + this.props);
    let sanPham = this.props.sanPham;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="..." height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>

          <button
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
            className="btn btn-danger ml-2"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      console.log("sanPhamClick", sanPhamClick);
      let spGH = { ...sanPhamClick, soLuong: 1 };
      const action = {
        type: "THEM_GIO_HANG",
        spGH: spGH,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
