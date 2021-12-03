export const gioHangReducer = (state = [], action) => {
  // console.log("action", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;
      let spGH = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (spGH) {
        spGH.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
      }
      return [...gioHang];
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSP);
      return [...gioHangCapNhat];
    }
  }
  return state;
};
