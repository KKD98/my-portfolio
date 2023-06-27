import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './HomePage/HomePage/HomePage.jsx';
import Main from './Main/Main.jsx';
import Projects from './Projects/Projects.jsx';
import AboutPage from './AboutPage/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
      element: <HomePage></HomePage>
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "projects",
        element: <Projects></Projects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
