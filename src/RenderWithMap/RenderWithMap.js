import React, { Component } from "react";

export default class RenderWithMap extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      img: "./img/CarBasic/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/CarBasic/products/black-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/CarBasic/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./img/CarBasic/products/steel-car.jpg",
      price: 4000,
    },
  ];
  render() {
    return <div></div>;
  }
}
