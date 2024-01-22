import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Linkcard from "../pages/Linkcard";
import Login from "../pages/Login";
import Note from "../pages/Note App";
import Register from "../pages/Register";

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path:'',
                element: <Dashboard />
            },
            {
                path: 'noteapp',
                element: <Note/>
            },
            {
                path: 'linkcard',
                element: <Linkcard/>
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