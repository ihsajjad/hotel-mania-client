import { createBrowserRouter } from "react-router-dom";
import Mian from "../layouts/Mian";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/login";
import SignUp from "../pages/signUp/SignUp";
import Error from "../shared/404/Error";
import BookNow from "../pages/bookNow/bookNow/BookNow";
import Dashboard from "../layouts/Dashboard";
import PendingBookings from "../pages/dashboard/user/pendingBookings/PendingBookings";
import RoomDetails from "../pages/bookNow/bookNow/roomDetails/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book-now",
        element: <BookNow />,
      },
      {
        path: "/book-now/:id",
        element: <RoomDetails />,
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/user/pending-bookings",
        element: <PendingBookings />,
      },
    ],
  },
]);
