import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Authprovide from "./Authprovider/Authprovider";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Register from "./pages/register/Register";
import AddProduct from "./components/AddProduct/AddProduct";
import MyCart from "./components/MyCart/MyCart";
import Contact from "./components/Contact/Contact";
import Account from "./pages/AccountSetting/Account";
import About from "./pages/About/About";
import Product from "./components/Product/Product";
import Details from "./components/Product/Details";
import Updateproduct from "./components/Product/Updateproduct";
import Privateroute from "./Privateroute/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://technology-electronics.vercel.app/product"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader: () => fetch("https://technology-electronics.vercel.app/cart"),
      },
      {
        path: "/contacts",
        element: <Contact></Contact>,
      },
      {
        path: "/account",
        element: <Account></Account>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/product/:brandname",
        element: <Product></Product>,
        loader: ({ params }) =>
          fetch(
            `https://technology-electronics.vercel.app/product/${params.brandname}`
          ),
      },
      {
        path: "/productt/:id",
        element: (
          <Privateroute>
            <Details></Details>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-electronics.vercel.app/productt/${params.id}`
          ),
      },
      {
        path: "/producttt/:id",
        element: (
          <Privateroute>
            <Updateproduct></Updateproduct>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-electronics.vercel.app/producttt/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovide>
      <RouterProvider router={router} />
    </Authprovide>
  </React.StrictMode>
);
