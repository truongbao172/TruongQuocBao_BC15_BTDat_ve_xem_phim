import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div className="player">
        <div className="think">
          <img
            className="mt-3"
            style={{ width: 150, height: 150 }}
            src={this.props.computer.hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/GameOanTuXi/playerComputer.png"
          alt=""
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
