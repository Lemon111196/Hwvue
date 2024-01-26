
import { getLocal } from "../utils/storage"
import { Navigate } from "react-router-dom"

interface IRouter {
    component: React.FC
}

export default function ProtectedRouter(props: IRouter) {
    const { component: Component } = props
    const token = getLocal('accessToken')
    return token? <Component/>: <Navigate to="/auth/login"/>
    
}
