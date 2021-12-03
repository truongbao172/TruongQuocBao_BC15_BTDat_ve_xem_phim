const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/GameOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/GameOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/GameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I love you 3000 , i am Iron Man ",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bao", hinhAnh: "./img/GameOanTuXi/bao.png" },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;

      return { ...state };
    }
    case "ENDGAME": {
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa nhau !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua !!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "I love you 3000 , i am Iron Man";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hòa nhau !!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua !!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "I love you 3000 , i am Iron Man";
            state.soBanThang += 1;
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hòa nhau !!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "I love you 3000 , i am Iron Man";
            state.soBanThang += 1;
          }
          break;
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
