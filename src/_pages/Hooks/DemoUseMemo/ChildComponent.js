import React from "react";
import { memo } from "react";

function ChildComponent(props) {
  console.log("comnent");
  return (
    <div>
      {props.renderNotify()}
      <h3>Like:{props.like}</h3>
      <textarea className="form-control"></textarea> <br />
      <button>Gửi</button>
    </div>
  );
}
export default memo(ChildComponent);
