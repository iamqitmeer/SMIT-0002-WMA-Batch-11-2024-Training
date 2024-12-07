import { Button, Image } from "@nextui-org/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-white p-8 sm:p-12 md:p-16 lg:p-24 antialiased dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 px-4 pb-8 lg:pb-16 xl:gap-20">
          <div className="content-center justify-self-start md:col-span-7 text-center md:text-left">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight dark:text-white">
              Limited Time Offer!
              <br />
              Up to 50% OFF!
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-8 text-base sm:text-lg lg:text-xl">
              Don't Wait - Limited Stock at Unbeatable Prices!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <Button
                variant="shadow"
                color="primary"
                className="w-full sm:w-auto py-3 sm:py-4 px-5 sm:px-7 font-bold"
              >
                Download Resume
              </Button>
              <Button
                variant="bordered"
                color="primary"
                className="w-full sm:w-auto py-3 sm:py-4 px-5 sm:px-7 font-semibold"
              >
                View Developer Github Profile
              </Button>
            </div>
          </div>
          <div className="hidden md:col-span-5 md:mt-0 md:flex justify-center items-center">
            <img
              className="dark:hidden w-full md:w-auto max-w-xs lg:max-w-md"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
              alt="shopping illustration"
            />
            <img
              className="hidden dark:block w-full md:w-auto max-w-xs lg:max-w-md"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
              alt="shopping illustration"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white antialiased dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16">
            <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
              <div className="grid min-w-0 flex-1 grid-cols-2 gap-6 md:gap-8 xl:grid-cols-3">
                <div>
                  <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    Company
                  </h6>
                  <ul className="space-y-3">
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {" "}
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {" "}
                        Premium{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {" "}
                        Blog{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {" "}
                        Affiliate Program{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {" "}
                        Get Coupon{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    Order &amp; Purchases
                  </h6>
                  <ul className="space-y-3">
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Order Status
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Track Your Order
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Purchase History
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Returns &amp; Refunds
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Payment Methods
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    Support &amp; Services
                  </h6>
                  <ul className="space-y-3">
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Contact Support
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Service Centers
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Warranty Information
                      </a>
                    </li>
                    <li>
                      <a
                        title=""
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Product Manuals
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg">
                <div className="space-y-5 rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                  <NavLink
                    to="/register"
                    className="text-base font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    {" "}
                    Sign In or Create Account{" "}
                  </NavLink>
                  <hr className="border-gray-200 dark:border-gray-600" />
                  <form action="#">
                    <div className="items-end space-y-4 sm:flex sm:space-y-0">
                      <div className="relative mr-3 w-full sm:w-96 lg:w-full">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          Get the latest deals and more.{" "}
                        </label>
                        <input
                          className="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full"
                          placeholder="Enter your email address"
                          type="email"
                          id="email"
                          required=""
                        />
                      </div>
                      <div>
                        <Button
                          color="primary"
                          variant="shadow"
                          className="w-full cursor-pointer rounded-lg bg-primary-700 px-5 py-5 text-center text-sm font-medium text-white"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </form>
                  <hr className="border-gray-200 dark:border-gray-600" />
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                      Trade on the go with{" "}
                      <NavLink
                        to="/product"
                        title=""
                        className="underline hover:no-underline"
                      >
                        Sadny App
                      </NavLink>
                    </p>
                    <div className="gap-4 space-y-4 sm:flex sm:space-y-0">
                      <a className="cursor-pointer inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800 sm:w-auto">
                        <svg
                          className="mr-3 h-7 w-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="google-play"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                          />
                        </svg>
                        <div className="text-left">
                          <div className="mb-1 text-xs">Download on the</div>
                          <div className="-mt-1 font-sans text-sm font-semibold">
                            Google Play
                          </div>
                        </div>
                      </a>
                      <a className="cursor-pointer inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800 sm:w-auto">
                        <svg
                          className="mr-3 h-7 w-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          />
                        </svg>
                        <div className="text-left">
                          <div className="mb-1 text-xs">Download on the</div>
                          <div className="-mt-1 font-sans text-sm font-semibold">
                            Mac App Store
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <hr className="border-gray-200 dark:border-gray-600" />
                  <div className="flex space-x-4">
                    <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 md:py-8">
            <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
              <a title="" className="block">
                <img
                  className="block h-8 w-auto dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt=""
                />
                <img
                  className="hidden h-8 w-auto dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt=""
                />
              </a>
              <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white xl:justify-center">
                <li>
                  <a title="" className="font-medium hover:underline">
                    {" "}
                    Flowbite Express{" "}
                  </a>
                </li>
                <li>
                  <a title="" className="font-medium hover:underline">
                    {" "}
                    Legal Notice{" "}
                  </a>
                </li>
                <li>
                  <a title="" className="font-medium hover:underline">
                    {" "}
                    Product Listing Policy{" "}
                  </a>
                </li>
                <li>
                  <a title="" className="font-medium hover:underline">
                    {" "}
                    Terms of Use{" "}
                  </a>
                </li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 <a className="hover:underline">Flowbite</a>, Inc. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
