import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import PageBoilerPlate from "./Root";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <PageBoilerPlate component={<Home />} />,
  },
  {
    path: "/main",
    element: <PageBoilerPlate component={<App />} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
