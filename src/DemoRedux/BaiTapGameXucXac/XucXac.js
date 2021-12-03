import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    const mangXucXac = this.props.mangXucXac;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4 text-center">
            <div
              className="mt-5"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              <span className="text-white display-4 p-5 bg-danger">TÀI</span>
            </div>
          </div>
          <div className="col-4 text-center">
            <img src={mangXucXac[0].hinhAnh} width={50} height={50} alt="..." />
            <img src={mangXucXac[1].hinhAnh} width={50} height={50} alt="..." />
            <img src={mangXucXac[2].hinhAnh} width={50} height={50} alt="..." />
          </div>
          <div className="col-4 text-center">
            <div
              className="mt-5"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              <span className="text-white display-4 p-5 bg-danger">XỈU</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (banChon) => {
      //   console.log("ban chon", banChon);
      const action = {
        type: "DAT_CUOC",
        banChon,
      };
      dispatch(action);
    },
  };
};
const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
