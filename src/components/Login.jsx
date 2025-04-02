import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // e.preventDefault();

    const checkMessage = Validate(email.current.value, password.current.value);
    setErrorMessage(checkMessage);
    if (checkMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      console.log();
      
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
          />
        </div>
        <div className="absolute flex mx-auto right-0 left-0 my-36 w-3/12 bg-black bg-opacity-80 text-white p-10 rounded-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            {isSignInForm ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
            {!isSignInForm && (
              <input
                ref={name}
                className="p-2 my-4 w-full rounded-md bg-gray-700"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="p-2 my-4 w-full rounded-md bg-gray-700"
              type="email"
              placeholder="Email Address"
            />
            <input
              ref={password}
              className="p-2 my-4 w-full rounded-md bg-gray-700"
              type="password"
              placeholder="Password"
            />
            {<h4 className="text-red-600">{errorMessage}</h4>}
            <button
              className="p-2 my-4 bg-red-600 w-full rounded-md "
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now."}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
