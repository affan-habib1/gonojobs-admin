import { lazy } from "react";

// project import
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

// render - sample page
const Dashboard = Loadable(lazy(() => import("pages/dashboard/Dashboard")));
const Users = Loadable(lazy(() => import("pages/users/Users")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ],
};

export default MainRoutes;
