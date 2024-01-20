import { Avatar} from "@mui/material"
import { NavbarContainer } from "./style"
import img from '../../assets/img/Kansei_Migate.webp'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
function Navbar() {
    const [navTitle, setNavTitle] = useState<String>('')
    const { pathname } = useLocation();
    const [profile, setProfile] = useState<boolean>(false);
    useEffect(() => {
        getNavTitle()
    }, [pathname]);
    const getNavTitle = () => {
        switch (pathname) {
            case "/linkcard":
                setNavTitle("Link Card");
                break
            case "/":
                setNavTitle("Dashboard");
                break
            case "/todo":
                setNavTitle("Note");
        }
    }

    const showProfile = () => {
        setProfile(!profile)
        setTimeout(() => {
            setProfile(false);
        }, 3000)
    }

    return (
        <NavbarContainer>
            <div className="nav">
                <div className="headNav">
                <h2>{navTitle}</h2>
                <div>
                    <ul className="navList">
                        <li className="navItem">Note App</li>
                        <li className="navItem">Linkcard</li>
                    </ul>
                </div>
                </div>
                <Avatar className="avatar" src={img} alt="Oops" onClick={showProfile}>
                </Avatar>
            </div>
            {profile && (
            <div >
                <ul className="list">
                    <li className="profile">Profile</li>
                    <li className="profile">Log out</li>
                </ul>
            </div>
            )}
        </NavbarContainer>
    )
}

export default Navbar