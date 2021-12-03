import React, { useState } from "react";

export default function DemoUseState(props) {
  let [like, setLike] = useState(1);
  return (
    <div className="container">
      <div className="card w-25 mt-2">
        <img src="https:i.pravatar.cc/200" alt="...." />
        <div className="card-body">
          <p className="text-danger">{like}❤</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            ❤ like
          </button>
        </div>
      </div>
    </div>
  );
}
