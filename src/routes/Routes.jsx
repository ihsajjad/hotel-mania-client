import { createBrowserRouter } from "react-router-dom";
import Mian from "../layouts/Mian";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/login";
import SignUp from "../pages/signUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
