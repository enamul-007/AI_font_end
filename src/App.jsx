import React, { useEffect } from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home_page/Home";
import Sign_up from "./Pages/Sign_up/Sign_up";
import Sign_in from "./Pages/Sign_in/Sign_in";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/Sign_up" element={<Sign_up />} />
      <Route path="/Sign_in" element={<Sign_in />} />
    </Route>
  )
);

const App = () => {
  useEffect(() => {
    const darkTheme = localStorage.getItem("theme");
    if (darkTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);
  return (
    <div className="text-black bg-white dark:bg-black dark:text-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
