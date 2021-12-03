// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HeaderHome from "./components/HeaderHome/HeaderHome";
// import About from "./_pages/About";
// import Contact from "./_pages/Contact";
// import HomePage from "./_pages/HomePage";
// import BaiTapUseState from "./_pages/Hooks/BaiTapUseState";
// import DemoHookRedux from "./_pages/Hooks/DemoHookRedux/DemoHookRedux";
// import DemoUseEffect from "./_pages/Hooks/DemoUseEffect";
// import DemoUseMemo from "./_pages/Hooks/DemoUseMemo/DemoUseMemo";
// import DemoUseState from "./_pages/Hooks/DemoUseState";
// import DemoUseRef from "./_pages/Hooks/UseRef/DemoUseRef";

// function App() {
//   return (
//     <BrowserRouter>
//       <HeaderHome />
//       <Switch>
//         <Route exact path="/home" component={HomePage} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/usestate" component={DemoUseState} />
//         <Route exact path="/btusestate" component={BaiTapUseState} />
//         <Route exact path="/useeffect" component={DemoUseEffect} />
//         <Route exact path="/usememo" component={DemoUseMemo} />
//         <Route exact path="/useref" component={DemoUseRef} />
//         <Route exact path="/hookredux" component={DemoHookRedux} />

//         {/* trang mặc đinh */}
//         <Route exact path="/" component={HomePage} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
import Nav from "./components/Nav";
import Card from "./components/Card";

import Profile from "./components/Profile";
import BaiTapComponent from "./components/BaiTapComponent/BaiTapComponent";
import BaiTapVeNha from "./components/BaiTapVeNha/BaiTapVeNha";
import Databinding from "./databinding/Databinding";
import HandleEvent from "./handleEvent/HandleEvent";
import StateDemo from "./State/StateDemo";
import Style from "./StyleDemo/Style";
import Example from "./State/Example";
import Example2 from "./State/Example2";
import DemoProps from "./Props/DemoProps/DemoProps";

import DanhSachPham from "./Props/DanhSachSanPham/DanhSachPham";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapQuanLyNguoiDung from "./ReactForm/BaiTapQuanLyNguoiDung";
import BaiTapOanTuXi from "./BaiTapOanTuXi/BaiTapOanTuXi";
import BaiTapDatVe from "./BaiTapDatVeXemPhim/BaiTapDatVe";

function App() {
  return (
    <div>
      {/* <Nav />
        <Card />
        <Profile /> */}
      {/* <BaiTapComponent /> */}
      {/* <BaiTapVeNha /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <Style /> */}
      {/* <p className='color-red'>App component</p> */}
      {/* <Example /> */}
      {/* <DemoProps /> */}
      {/* <DanhSachPham /> */}
      {/* <BaiTapThuKinh /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <BaiTapQuanLyNguoiDung /> */}
      {/* <BaiTapOanTuXi /> */}
      <BaiTapDatVe />
    </div>
  );
}

export default App;
