import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ProgramPage from "../pages/programPages/ProgramPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import UserPage from "../pages/UserPage";
import CartPage from "../pages/CartPage";
import ProgramToday from "../pages/programPages/ProgramToday";
import ProgramTomorrow from "../pages/programPages/ProgramTomorrow";
import ProgramWeek from "../pages/programPages/ProgramWeek";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/program",
        element: <ProgramPage />,
        children: [
          {
            path: "/program",
            element: <ProgramToday />,
          },
          {
            path: "/program/tomorrow",
            element: <ProgramTomorrow />,
          },
          {
            path: "/program/week",
            element: <ProgramWeek />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default Router;
