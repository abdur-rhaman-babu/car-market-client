import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/Mainlayout.jsx";
import Home from "./components/Home.jsx";
import AddCar from "./components/AddCar.jsx";
import UpdateCar from "./components/UpdateCar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5500/cars")
      },
      {
        path: "/addCar",
        element: <AddCar />,
      },
      {
        path: "/updateCar",
        element: <UpdateCar />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
