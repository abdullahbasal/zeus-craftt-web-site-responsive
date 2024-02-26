import "./Layout.css";

import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
