import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./login.jsx";
import Browser from "./Browse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice.js";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        
      } else {

        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default Body;
