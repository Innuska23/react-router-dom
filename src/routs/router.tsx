import * as React from "react";
import { createBrowserRouter, Navigate, Outlet, RouteObject } from "react-router-dom";

import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Model } from "../components/pages/model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Login } from "../components/pages/Login";

const Adidas = React.lazy(() => import("../components/pages/Adidas"));
const Puma = React.lazy(() => import("../components/pages/Puma"));
const Abibas = React.lazy(() => import("../components/pages/Abibas"));
const Prices = React.lazy(() => import("../components/pages/Prices"));

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  MODEL: "/:model/:id",
  ERROR: '/error',
  PROTECTEDPAGE: '/protectedpage'
} as const;


export const PrivateRoutes = () => {
  const isAuth = true;
  return (
    <div>
      {isAuth
        ? <Outlet />
        : <Login />
      }
    </div>
  )
}


const publicRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Adidas />
      </React.Suspense>
    ),
  },
  {
    path: PATH.PUMA,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Puma />
      </React.Suspense>
    ),
  },
  {
    path: PATH.ABIBAS,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Abibas />
      </React.Suspense>
    ),
  },
  {
    path: PATH.PRICES,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Prices />
      </React.Suspense>
    ),
  },
  {
    path: PATH.MODEL,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Model />
      </React.Suspense>
    ),
  },
  {
    path: PATH.ERROR,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Error404 />
      </React.Suspense>
    ),
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTEDPAGE,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ProtectedPage />
      </React.Suspense>
    ),
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes
      },
      ...publicRoutes,

    ],
  },
]);
