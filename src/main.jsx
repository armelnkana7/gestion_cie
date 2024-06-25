import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "../node_modules/primereact/resources/themes/lara-light-teal/theme.css";
import "../node_modules/primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";

// ------------------------------
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import UserList from "./pages/users/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home name={"Accueil"} />,
      },
      {
        path: "/users-list",
        element: <UserList name={"Gestion des utilisateurs"} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </PrimeReactProvider>
  </React.StrictMode>
);
