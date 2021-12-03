import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

import "./BaiTapThuKinh.css";
export default class BaiTapThuKinh extends Component {
  state = {
    glassesClick: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <div
          className="col-2"
          key={index}
          onClick={() => {
            this.changeGlasses(glassesItem);
          }}
        >
          <a href="#">
            <img src={glassesItem.url} alt="..." />
          </a>
        </div>
      );
    });
  };

  changeGlasses = (neWglasses) => {
    this.setState({
      glassesClick: neWglasses,
    });
  };
  render() {
    return (
      <div>
        <div className="bgKinh">
          <div className="thuKinh_content">
            <h3 className="text-center py-4 text-white">
              TRY GLASSES APP ONLINE
            </h3>
            <div className="container">
              <div className="row models mt-5 text-center">
                <div className="col-6">
                  <div className=" model-right">
                    <img src="./glassesImage/model.jpg" alt="..." />
                    <div className="kinh">
                      <img src={this.state.glassesClick.url} alt="" />
                    </div>
                    <div className="overlay text-left">
                      <p className="title">{this.state.glassesClick.name}</p>
                      <p className="sub_title">
                        {this.state.glassesClick.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6  ">
                  <div className="model-left">
                    <img src="./glassesImage/model.jpg" alt="..." />
                  </div>
                </div>
              </div>

              <div className="row mt-5 kinhClick">
                {this.renderGlasses()}
                {/* <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v1.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v2.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v3.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v4.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v5.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v6.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v7.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v8.png" alt="..." />{" "}
                  </a>
                </div>
                <div className="col-2">
                  <a href="#">
                    <img src="./glassesImage/v9.png" alt="..." />{" "}
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// style={{
//   backgroundImage: "url(./glassesImage/background.jpg)",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "100%",
//   backgroundPosition: "center",
//   height: "100vh",
// }}
