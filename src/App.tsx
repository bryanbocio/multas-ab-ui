import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
function App() {
  const Layout = () => {
    return (
      <>
        <div className="flex min-h-screen bg-gray-50 ">
          <Leftbar />
          <div className="p-5 flex-6">
            <Outlet />
          </div>
        </div>

        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
