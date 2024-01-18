import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
    {
        path: '/',
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