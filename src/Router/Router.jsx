import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
// import Services from "../Pages/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
// import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/services.json"),
      },

      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        loader: () => fetch("/ongoing.json"),
      },
      {
        path: "/Profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
