import { Button } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"; // Assuming you have auth configuration

function Cart() {
  let [totalPrice, setTotalPrice] = useState(0);
  let { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current user from Firebase auth
    const user = auth.currentUser;

    // If the user is an admin, redirect them to another page
    if (user && user.email === "admin@gmail.com") {
      navigate("/add_product"); // or any admin page you want to redirect to
    } else {
      setTotalPrice(cart.reduce((total, product) => total + product.price, 0));
    }
  }, [cart, navigate]);

  let deleteCartItem = (index) => {
    let newArray = [...cart];
    newArray.splice(index, 1);
    setCart(newArray);
  };

  let storePickup = 12;
  let tax = 6 * cart.length;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cart.map((product, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <div className="w-20 shrink-0 md:order-1">
                      <img
                        className="h-20 w-20 object-cover rounded-md dark:hidden"
                        src={product.imageURL}
                        alt={product.title}
                      />
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                        {product.title}
                      </a>

                      <div className="flex items-center justify-between gap-4">
                        <p className="text-base font-bold text-gray-900 dark:text-white">${product.price}</p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => deleteCartItem(index)}
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${Math.floor(totalPrice)}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${storePickup}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${tax}</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    ${Math.floor(totalPrice) + tax + storePickup}
                  </dd>
                </dl>
              </div>

              <Link to="/checkout_process">
                <Button
                  disabled={Math.floor(totalPrice) === 0}
                  className={`flex w-full items-center ${Math.floor(totalPrice) === 0 ? "bg-gray-400 hover:bg-gray-500" : "bg-primary-700 hover:bg-primary-800"} justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white`}
                >
                  Proceed to Checkout
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">or</span>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
