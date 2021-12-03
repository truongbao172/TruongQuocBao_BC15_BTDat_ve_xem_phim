import React, { Component } from "react";

export default class item extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={hinh} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{id}</p>
              <h5 className="card-title">{ten}</h5>
              <p className="card-text">{alias}</p>
              <p className="card-text">{price}</p>
              <a href="#" className="btn btn-primary">
                add to card
              </a>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
