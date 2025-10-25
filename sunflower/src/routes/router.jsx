import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Error from "../componants/Error";
import Home from "../componants/Home/Home";
import Course from "../pages/Course";
import About from "../pages/About";

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
        path:'/About',
        Component:About,
        // loader:() => fetch('../App.json')
      },
    ],
  },
]);

export default router;
