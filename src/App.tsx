import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Index from "./pages";
import "./App.css";

const ErrorPage = React.lazy(() => import("./error"));
const Page1 = React.lazy(() => import("./pages/page1"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Page1 /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
