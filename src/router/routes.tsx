import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Linkcard from "../pages/Linkcard";
import Login from "../pages/Login";
import Note from "../pages/Note App";
import Register from "../pages/Register";
import ProtectedRouter from "./protectedRoutes";

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path:'',
                element: <ProtectedRouter component={Dashboard} />
            },
            {
                path: 'noteapp',
                element: <ProtectedRouter component={Note} />
            },
            {
                path: 'linkcard',
                element: <ProtectedRouter component={Linkcard} />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path:'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
]
export default routes;