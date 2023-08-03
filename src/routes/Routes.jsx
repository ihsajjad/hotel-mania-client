import { createBrowserRouter } from "react-router-dom";
import Mian from "../layouts/Mian";
import Home from "../pages/home/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
