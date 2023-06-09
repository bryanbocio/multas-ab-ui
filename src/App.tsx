import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Footbar from "./components/footbar/Footbar";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Weather from "./pages/weather/Weather";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { AuthContextType } from "./context/AuthContextType";
import Map from "./pages/map/Map";
import ApplyTrafficFine from "./pages/applyTrafficFine/ApplyTrafficFine";
import CheckDriver from "./pages/checkDriver/CheckDriver";
import TrafficFineDetails from "./pages/trafficFineDetails/TrafficFineDetails";
import Basket from "./pages/basket/Basket";
import { hasMultipleRoles } from "./utils/Roles";
function App() {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-50 dark:bg-[#222] ">
          <Navbar />
          <div className="flex">
            <Leftbar />
            <div className="p-5 flex-5 lg:flex-6">
              <Outlet />
            </div>
          </div>
        </div>
        <Footbar />
      </QueryClientProvider>
    );
  };
  const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
    if (token == null || token == "") return <Navigate to="/" />;

    return children;
  };

  const Private = ({ children }: { children: JSX.Element }) => {
    if (!hasMultipleRoles(currentUser.role)) return <Navigate to="/home" />;

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <PrivateRoutes>
          <Layout />
        </PrivateRoutes>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/weather",
          element: <Weather />,
        },
        {
          path: "/map",
          element: <Map />,
        },
        {
          path: "/drivers",
          element: (
            <Private>
              <CheckDriver />
            </Private>
          ),
        },
        {
          path: "/applyTrafficFine",
          element: (
            <Private>
              <ApplyTrafficFine />
            </Private>
          ),
        },
        {
          path: "trafficFineDetails/:id",
          element: <TrafficFineDetails />,
        },
        {
          path: "basket",
          element: <Basket />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
