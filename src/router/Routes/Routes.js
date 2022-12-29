import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddTask from "../../pages/Home/AddTask";
import MyTask from "../../pages/Home/MyTask";
import CompletedTask from "../../pages/Home/CompletedTask";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";

const { createBrowserRouter, Link } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addTask',
            element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
        },
        {
            path: '/myTask',
            element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
        },
        {
            path: '/completedTask',
            element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
      ]
    },
    {
        path: '*',
        element: <div className="text-center">
            <img className="h-96 mx-auto mt-40 mb-6" src="" alt="error-img" />
            <Link to='/' className="px-20 py-2 bg-orange-500 text-slate-900 my-6 rounded font-bold hover:bg-orange-600">Back</Link>
        </div>
    }
  ]);

  export default router;