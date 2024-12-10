import { createBrowserRouter, Outlet } from "react-router-dom";
import Wrapper from "./wrapper";
import Home from "./pages/home";
import Category from "./pages/category";
import Manage from "./pages/manage";
import CategoryDetail from "./pages/category/detail";
import RequestDetail from "./pages/request";

// Admin
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import EarnWithUsPage from "./pages/earnwithus";
import NotFound from "./pages/NotFound";

const routers = [
  {
    element: (
      <Wrapper>
        <Outlet />
      </Wrapper>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/category/:id",
        element: <CategoryDetail />,
      },
      {
        path: "/request/:id",
        element: <RequestDetail />
      },
      {
        path: '/earnwithus',
        element: <EarnWithUsPage />
      }
    ],
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "*", // Catch-all route for top-level unmatched paths
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routers, {
  future: {
    v7_normalizeFormMethod: true,
  },
});
