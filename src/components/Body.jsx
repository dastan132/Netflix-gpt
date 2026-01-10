import React from "react";
import Login from "./login.jsx";
import Browser from "./Browse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Body() {
    const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browser',
    element: <Browser />,
  }
]);
  return (
    <>
  <RouterProvider router={appRouter} />
    </>
  );
}

export default Body;
