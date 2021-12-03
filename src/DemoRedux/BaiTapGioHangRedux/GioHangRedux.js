import React, { Component } from "react";
import { connect } from "react-redux";
class GioHangRedux extends Component {
  render() {
    let { gioHang } = this.props;
    console.log(this.props);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>
                    <img src={spGH.hinhAnh} width={50} alt="..." />
                  </td>
                  <td>{spGH.tenSP}</td>
                  <td>{spGH.giaBan}</td>
                  <td className="d-flex">
                    <button className="btn btn-primary mr-2 d-inline-block">
                      +
                    </button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2">-</button>
                  </td>
                  <td>{spGH.soLuong * spGH.giaBan}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                      }}
                      className="btn btn-danger"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
//DƯa du lieu len redux
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      // console.log("maspclick", maSPClick);
      const action = {
        type: "XOA_GIO_HANG",
        maSP: maSPClick,
      };
      dispatch(action);
    },
  };
};
//viet ham ket noi vs redux
const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.stateGioHang,
  };
};
//sinh ra componet ket noi vs redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
