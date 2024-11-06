import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();
  const loginUser = () => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        setLoader(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  return (
    <>
      <section className="bg-gray-950 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-950 md:text-2xl dark:text-white">
                Login Your Existing Account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <Input
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="bordered"
                  className="w-full"
                />
                <Input
                  label="Password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <i className="ri-eye-fill text-2xl text-default-400 pointer-events-none"></i>
                      ) : (
                        <i className="ri-eye-off-line text-2xl text-default-400 pointer-events-none"></i>
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />

                {loader ? (
                  <Button
                    isLoading
                    className="w-full text-white bg-primary-600 hover:bg-primary-700"
                    color="primary"
                    spinner={
                      <svg
                        className="animate-spin h-5 w-5 text-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                  >
                    Loading
                  </Button>
                ) : (
                  <Button
                    disabled={loader}
                    onClick={loginUser}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Login
                  </Button>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <NavLink
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up
                  </NavLink>
                </p>

                {/* Admin Login Details */}
                <div className="mt-4  text-sm font-light text-gray-500 dark:text-gray-400">
                  <p className="font-bold">For Admin Login:</p>
                  <p>Email: <strong className="font-bold">admin@gmail.com</strong></p>
                  <p>Password: <strong className="font-bold">123456</strong></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
