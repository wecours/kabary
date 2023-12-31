import { createBrowserRouter } from "react-router-dom";
import Ohabolana from '../Ohabolana/Ohabolana';
import Home from "../Home/Home";

const mainRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ohabolana",
      element: <Ohabolana />,
    },
]);

export default mainRoute;