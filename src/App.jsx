import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home_page/Home";
import Sign_up from './Pages/Sign_up/Sign_up'
import Sign_in from './Pages/Sign_in/Sign_in'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home/>} />
      <Route path="/Sign_up" element={<Sign_up/>} />
      <Route path="/Sign_in" element={<Sign_in/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
  
};

export default App;
