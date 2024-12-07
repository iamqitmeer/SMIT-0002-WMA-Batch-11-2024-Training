import { Button } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"; // Assuming you have auth configuration

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    if (user && user.email === "admin@gmail.com") {
      navigate("/add_product");
    } else {
      setTotalPrice(cart.reduce((total, product) => total + product.price, 0));
    }
  }, [cart, navigate]);

  const deleteCartItem = (index) => {
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
              {cart.length === 0 ? (
                <div>Your cart is empty.</div>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
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
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            ${product.price}
                          </p>
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
                ))
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order Summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${Math.floor(totalPrice)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${storePickup}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${tax}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4 text-gray-900 dark:border-gray-700 dark:text-white">
                  <dt className="text-base font-semibold">Total</dt>
                  <dd className="text-base font-semibold">
                    ${totalPrice ? Math.floor(totalPrice + storePickup + tax) : 0}
                  </dd>
                </dl>
              </div>

              <Link to="/checkout">
                <Button
                  className={`mt-4 w-full ${
                    cart.length !== 0 ? "bg-blue-500" : "bg-gray-200"
                  }`}
                  disabled={cart.length == 0}
                >
                  Proceed to checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
