import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path:'',
                element: <Dashboard />
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