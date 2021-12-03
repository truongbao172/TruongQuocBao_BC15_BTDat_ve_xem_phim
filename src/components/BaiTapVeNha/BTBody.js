import React, { Component } from "react";
import BTBanner from "./BTBanner";
import ListItem from "./ListItem";

export default class BTBody extends Component {
  render() {
    return (
      <div>
        <BTBanner />
        <ListItem />
      </div>
    );
  }
}
