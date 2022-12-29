import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddTaskDetails from "../../pages/Home/AddTask/AddTaskDetails";
import MyTaskDetails from "../../pages/Home/MyTask/MyTaskDetails";
import CompletedTaskDetails from "../../pages/Home/CompletedTask/CompletedTaskDetails";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import errorImg from "../../assets/error-page.jpg";

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
            path: '/addTaskDetails',
            element: <PrivateRoute><AddTaskDetails></AddTaskDetails></PrivateRoute>
        },
        {
            path: '/myTaskDetails',
            element: <PrivateRoute><MyTaskDetails></MyTaskDetails></PrivateRoute>
        },
        {
            path: '/completedTaskDetails',
            element: <PrivateRoute><CompletedTaskDetails></CompletedTaskDetails></PrivateRoute>
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
            <img className="h-96 mx-auto mt-40 mb-6" src={errorImg} alt="error-img" />
            <Link to='/' className="px-20 py-2 bg-slate-800 text-slate-200 my-6 rounded font-bold hover:bg-slate-600">Back</Link>
        </div>
    }
  ]);

  export default router;