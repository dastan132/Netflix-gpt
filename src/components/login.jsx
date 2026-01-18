import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Headers from "./Header";
import { checkValidData } from "../utils/valitade";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { NETFLIX_BG, USER_LOGO } from "../utils/constants.js";


function Login() {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const firstNameValue = isSignInForm ? "" : firstName.current.value;
    const lastNameValue = isSignInForm ? "" : lastName.current.value;

    const message = checkValidData(
      emailValue,
      passwordValue,
      firstNameValue,
      lastNameValue
    );
    setErrorMessage(message);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstNameValue + " " + lastNameValue,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // console.log("User signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
           console.log("singin ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -" + errorMessage);
        });
    }
  };

  const toggleSignForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div className=" ">
      <Headers />
      <div className=" absolute">
        <img
          className=""
          src={NETFLIX_BG}
          alt="Netflix background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" font-bold text-white w-3/12 absolute p-12 bg-black my-40  mx-auto right-0 left-0 rounded-lg bg-opacity-80 "
      >
        <h1 className=" text-3xl  py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={firstName}
              type="text"
              placeholder="First Name"
              className=" w-full p-4 my-4 rounded-lg bg-gray-600"
            />
            <input
              ref={lastName}
              type="text"
              placeholder="Last Name"
              className=" w-full p-4 my-4 rounded-lg bg-gray-600"
            />
          </div>
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className=" w-full p-4 my-4 rounded-lg bg-gray-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" w-full p-4 my-4 rounded-lg bg-gray-600"
        />
        <p className=" text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className=" bg-red-600 hover:bg-red-900 p-4 my-6 w-full rounded-lg "
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className=" py-6 cursor-pointer hover:text-blue-500"
          onClick={toggleSignForm}
        >
          {isSignInForm
            ? "Don't have an account?Sign Up Now "
            : "Already a user?Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
