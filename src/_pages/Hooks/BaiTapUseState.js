import React from "react";
import { useState } from "react";

export default function BaiTapUseState(props) {
  let [color, changeColor] = useState("red");
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src={`./img/CarBasic/products/${color}-car.jpg`}
            alt="..."
            className="w-100"
          />
        </div>
        <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={() => {
              changeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn bg-dark text-white"
            onClick={() => {
              changeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn btn-default"
            style={{ backgroundColor: "#EEE" }}
            onClick={() => {
              changeColor("silver");
            }}
          >
            Silver
          </button>
          <button
            onClick={() => {
              changeColor("steel");
            }}
            className="btn"
            style={{ backgroundColor: "gray", color: "#000" }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}
