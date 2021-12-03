import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    // console.log(this.props.mangDatCuoc);
    return (
      <div className="player">
        <div className="think">
          <img
            className="mt-3"
            style={{ width: 150, height: 150 }}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/GameOanTuXi/player.png"
          alt=""
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            //xet gia tri dat cuoc. them vien cho item dc chon

            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid blue" };
            }

            return (
              <div className="col-4">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  style={border}
                  className="btn-item"
                >
                  <img src={item.hinhAnh} alt="..." />
                </button>
              </div>
            );
          })}
          {/* <div className="col-4">
            <button className="btn-item">
              <img src="./img/GameOanTuXi/bao.png" alt="" />
            </button>
          </div>
          <div className="col-4">
            <button className="btn-item">
              {" "}
              <img src="./img/GameOanTuXi/keo.png" alt="" />
            </button>
          </div>
          <div className="col-4">
            <button className="btn-item">
              {" "}
              <img src="./img/GameOanTuXi/bua.png" alt="" />
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
