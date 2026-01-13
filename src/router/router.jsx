import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("../pages/Home/Home"));
const Experience = lazy(() => import("../pages/Experience/Experience"));
const Education = lazy(() => import("../pages/Education/Education"));
const Skills = lazy(() => import("../pages/Skills/Skills"));
const Project = lazy(() => import("../pages/Project/Project"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
          {
            index : true,
            element : <Home />
          },
          {
            path : "skills",
            element : <Skills />
          },
          {
            path : "project",
            element : <Project />
          },
          {
            path : "experience",
            element : <Experience />
          },
          {
            path : "education",
            element : <Education />
          },
        ]
    },
  {
    path: "*",
    element: <NotFound />,
  },
]);