import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi ">
        <div className="row text-center mt-5">
          <div className="col-4 mt-5">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <KetQuaTroChoi />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-3 display-4 mt-5"
            >
              Play game
            </button>
          </div>
          <div className="col-4 mt-5">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch({
        type: "RANDOM",
      });
      const action = {
        type: "ENDGAME",
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
