import XucXac from "../../DemoRedux/BaiTapGameXucXac/XucXac";

const stateDefault = {
  banChon: false, //tai,xiu
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/2.png", diem: 2 },
    { hinhAnh: "./img/gameXucXac/4.png", diem: 4 },
  ],
};
export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      let mangXXNN = [];
      //RAMdom 3 so ngau nhien
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //tu72 so61 ngau nhien tao ra xuc xac
        let xucXacNN = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        mangXXNN.push(xucXacNN);
      }
      state.mangXucXac = mangXXNN;
      //cap nhat lai so ban choi
      state.tongSoBanChoi += 1;
      //cap nhat so ban thang
      let tongDiem = state.mangXucXac.reduce((diem, xucXac, index) => {
        return (diem += xucXac.diem);
      }, 0);
      if (
        (tongDiem > 11 && state.banChon === true) ||
        (tongDiem <= 11 && state.banChon === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
