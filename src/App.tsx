import { useRoutes } from "react-router-dom"
import routes from "./router/routes";
import './assets/styles/App.scss';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const router = useRoutes(routes);
  return (
    <div className="app-container">
      <ToastContainer/>
      {router}</div>
  )
}

export default App
