import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import RootRedirect from "./routes/RootRedirect";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Header />
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

export default router;
