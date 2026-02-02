import React from "react";

import Login from "./login.jsx";
import Browser from "./Browse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx" 

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
     {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <>
    
      <RouterProvider router={appRouter} />
    </>
  );
}

export default Body;
