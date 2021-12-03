import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./Reducer/gioHangReducer";
import { gameXucXacReducer } from "./Reducer/gameXucXacReducer";
import { BTQuanLyNguoiDungReducer } from "./Reducer/BTQuanLyNguoiDungReducer";
import BaiTapOanTuXiReducer from "./Reducer/BTOanTuXiReducer";
import { FaceBookAppReducer } from "./Reducer/FaceBookAppReducer";
import BaiTapDatVeReducer from "./Reducer/BaiTapDatVeReducer";
const rootReducer = combineReducers({
  //Noi CHỨA toàn bộ state của ứng dụng (thay vi đat duoi this.state)
  stateGioHang: gioHangReducer,
  gameXucXacReducer,
  BTQuanLyNguoiDungReducer,
  BaiTapOanTuXiReducer,
  FaceBookAppReducer,
  BaiTapDatVeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
