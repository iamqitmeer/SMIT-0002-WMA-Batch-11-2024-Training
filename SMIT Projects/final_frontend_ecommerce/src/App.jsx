import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Contact from "./Screens/Contact";
import About from "./Screens/About";
import AppLayout from "./Components/AppLayout";
import ProductCard from "./Components/ProductCard";
import ProductDetailPage from "./Components/ProductDetailPage";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import AddProduct from "./Screens/AddProduct";
import ManageProduct from "./Screens/ManageProduct";
import Cart from "./Screens/Cart";
import Checkout from "./Screens/Checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/add_product",
          element: <AddProduct />,
        },
        {
          path: "/manage_product",
          element: <About />,
        },
        { path: "/checout_process", element: <Checkout /> },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;