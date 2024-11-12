import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Model } from "../components/pages/model";

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
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
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
    ],
  },
]);
