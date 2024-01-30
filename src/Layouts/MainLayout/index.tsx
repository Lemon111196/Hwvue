import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { MainLayoutContainer } from "./style";
import { ToastContainer } from "react-toastify";
export default function MainLayout() {
  return (
    <MainLayoutContainer>
      <ToastContainer/>
      <div className="nav">
        <Navbar />
      </div>
      <Outlet />
    </MainLayoutContainer>
  )
}
