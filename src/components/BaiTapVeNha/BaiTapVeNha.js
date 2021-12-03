import React, { Component } from "react";
import BTBody from "./BTBody";
import BTFooter from "./BTFooter";
import BTHeader from "./BTHeader";

export default class BaiTapVeNha extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTBody />
        <BTFooter />
      </div>
    );
  }
}
