import { Outlet } from "react-router-dom";
import abc from '../../assets/img/bg1.jpg'
import { AuthLayoutContainer } from "./style";
export default function AuthLayout() {
    return (
        <AuthLayoutContainer>
            <img src={abc} alt="" />
            <Outlet></Outlet>
        </AuthLayoutContainer>
    )
}
