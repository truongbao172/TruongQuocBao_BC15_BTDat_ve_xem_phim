import React from "react";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

export default function DemoHookRedux(props) {
  const [state, setState] = useState({
    name: "",
    comment: "",
  });
  console.log("state", state);
  let arrContent = useSelector(
    (rootReducer) => rootReducer.FaceBookAppReducer.arrContent
  );
  //usedispatch thay the cho props.dispatch cua ham connect
  const dispatch = useDispatch();
  const sendComment = () => {
    const action = {
      type: "ADD_COMMENT",
      comment: state,
    };
    dispatch(action);
  };
  const handleChangInput = (event) => {
    let { name, value } = event.target;
    setState({
      ...state, //lưu lại các giá trị cũ truoc khi setstate
      [name]: value,
    });
  };

  console.log("arrcontent", arrContent);
  console.log(props.arrContent);
  return (
    <div className="container mt-5">
      <h3>DEMO HOOK-REDUX</h3>
      <div className="card">
        <div className="card-header">
          {arrContent.map((cmt, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img src={`https://i.pravatar.cc/50?u=${cmt.name}`} />
                </div>
                <div className="col-10">
                  <h3 className="text-danger">{cmt.name}</h3>
                  <p>{cmt.connect}</p>
                </div>
              </div>
            );
          })}
          {/* <div className="row">
            <div className="col-2">
              <img src="https://i.pravatar.cc/50?u=a" />
            </div>
            <div className="col-10">
              <h3 className="text-danger">Bao</h3>
              <p>Hello ! cyber soft</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://i.pravatar.cc/50?u=a" />
            </div>
            <div className="col-10">
              <h3 className="text-danger">Bao</h3>
              <p>Hello ! cyber soft</p>
            </div>
          </div> */}
        </div>

        <div className="card-body">
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              name="name"
              onChange={handleChangInput}
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input
              className="form-control"
              name="content"
              onChange={handleChangInput}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-success"
              onClick={() => {
                sendComment();
              }}
            >
              Send!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// const mapStateToProps = (rootReducer) => {
//   return {
//     arrContent: rootReducer.FaceBookAppReducer.arrContent,
//   };
// };
// export default connect(mapStateToProps)(DemoHookRedux);
