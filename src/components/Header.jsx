import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants.js";
import { setDropdownOpen } from "../utils/uiSlice.js";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isDropdownOpen = useSelector((state) => state.ui.isDropdownOpen);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    dispatch(setDropdownOpen(!isDropdownOpen));
  };

  const handleSignOut = () => {
    dispatch(setDropdownOpen(false));
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
<div className="absolute left-0 right-0 px-8 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center">

      <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO_URL} alt="logo" />

      {user && (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-white bg-transparent hover:bg-white/10 rounded px-2 py-1 transition"
          >
            <img
              src={user.photoURL || "https://i.pravatar.cc/40"}
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover"
            />

            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black text-white rounded shadow-lg">
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
