import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Error from "../componants/Error";
import Home from "../componants/Home/Home";
import Course from "../pages/Course";
import MyProfile from "../componants/MyProfile";
import signup from "../../signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component : Home,
        loader: () => fetch('/skill.json')    
      },
      {
        path:'/Course',
        Component:Course,
        loader: () => fetch('/skill.json')

      },
      {
        path:'/MyProfile',
        Component: MyProfile,
      },
      {
        path:'/signup',
        Component:signup,
      }
      
    ],
  },
]);

export default router;
