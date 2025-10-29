import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './pages/About';
import Layout from './Components/Layout.jsx';
import Sponsor from './pages/Sponsor';
import Docs from './pages/Docs.jsx';
import Showcase from './pages/Showcase';
import Blog from './pages/Blog';




const router = createBrowserRouter([


  // {
  //   path: "/",
  //   element: <App/>,
  // },
  //  {
  //   path: "/about",
  //   element: <About/>,
  // },

    {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: "about", Component: About },
      { path: "sponsor", Component: Sponsor },
      { path: "docs", Component: Docs },
      { path: "blog", Component: Blog },
      { path: "showcase", Component: Showcase },
    ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}


     <RouterProvider router={router} />
  </StrictMode>,
)
