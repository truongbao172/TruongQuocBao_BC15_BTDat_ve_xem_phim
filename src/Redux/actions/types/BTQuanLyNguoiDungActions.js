import { XOA_NGUOI_DUNG } from "./BTQuanLyNguoiDungTypes";
export const xoaNguoiDungAction = (taiKhoan) => {
    return {
        type: XOA_NGUOI_DUNG,
        taiKhoan: taiKhoan,
    };
};