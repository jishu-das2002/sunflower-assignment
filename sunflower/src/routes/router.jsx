import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import ErrorPage from "../componants/ErrorPage";
import Home from "../componants/Home/Home";
import Course from "../pages/Course";
import MyProfile from "../componants/MyProfile";
import Signup from "../componants/Signup";
import Signin from "../componants/Signin";
import ProtectedRoute from "../componants/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Signup,
      },
      {
        path: "/home",
        Component: Home,
        loader: () => fetch("/skill.json"),
      },
      {
        path: "/course",
        Component: () => (
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        ),
        loader: () => fetch("/skill.json"),
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
      {
        path: "/signin",
        Component: Signin,
      },
    ],
  },
]);

export default router;
