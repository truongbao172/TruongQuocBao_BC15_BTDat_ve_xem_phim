import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function DemoUseRef(props) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [keyword, setkeyword] = useState("");
  let tuKhoaVuaTim = useRef("");

  const handleLogin = () => {
    console.log("username:", usernameRef.current.value);
    console.log("username:", passwordRef.current.value);
  };
  const search = (e) => {
    //lấy giá trị seach value từ input
    let { value } = e.target;
    setkeyword(value);
  };

  const handleSearch = () => {
    tuKhoaVuaTim.current = keyword;
    console.log(tuKhoaVuaTim.current);
  };
  return (
    <div className="container">
      <h3>Từ khóa vừa tìm:{tuKhoaVuaTim.current}</h3>
      <div className="form-group mt-2">
        <input className="form-control" onChange={search} />
        <button
          className="mt-2 btn btn-success"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
      <hr />
      <h3>Login</h3>
      <div className="form-group">
        <p>User name</p>
        <input ref={usernameRef} className="form-control" />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input ref={passwordRef} className="form-control" />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
