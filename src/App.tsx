import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path:"/home",
      element: <Layout/>,
      children:[
        {
          path:"/home",
          element: <Home/>
        }
      ]
    }

  ]);
 
  return <RouterProvider router={router}/>
}

export default App;
