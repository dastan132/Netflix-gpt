import React, { useState } from "react";
import Headers from "./Header";

function Login() {
  const [isSignInForm, setIsSignForm] = useState(true);
  const toggleSignForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div className=" ">
      <Headers />
      <div className=" absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_small.jpg"
          alt="Netflix background"
        />
      </div>
      <form className=" font-bold text-white w-3/12 absolute p-12 bg-black my-40  mx-auto right-0 left-0 rounded-lg bg-opacity-80 ">
        <h1 className=" text-3xl  py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              type="text"
              placeholder="First Name"
              className=" w-full p-4 my-4 rounded-lg bg-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" w-full p-4 my-4 rounded-lg bg-gray-600"
            />
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className=" w-full p-4 my-4 rounded-lg bg-gray-600"
        />

        <input
          type="password"
          placeholder="Password"
          className=" w-full p-4 my-4 rounded-lg bg-gray-600"
        />

        <button className=" bg-red-600 hover:bg-red-900 p-4 my-6 w-full rounded-lg ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className=" py-6 cursor-pointer hover:text-blue-500"
          onClick={toggleSignForm}
        >
          {" "}
          {isSignInForm
            ? "Don't have an account?Sign Up Now "
            : "Already a user?Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
