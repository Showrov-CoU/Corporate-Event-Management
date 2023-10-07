import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
]);

export default router;
