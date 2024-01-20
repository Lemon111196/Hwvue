import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navabar";
import { MainLayoutContainer } from "./style";
export default function MainLayout() {
  return (
    <MainLayoutContainer>
      <Outlet />
      <div className="nav">
        <Navbar />
      </div>
    </MainLayoutContainer>
  )
}
