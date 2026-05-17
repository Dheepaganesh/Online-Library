import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <h1>Welcome to the Bookstore!</h1>,
      },
      {
        path: "/books/browse",
        element: <h1>Browse all books</h1>,
        errorElement: <NotFound />,
      },
      {
        path: "books/browse/:category",
        element: <h1>Books in category</h1>,
        errorElement: <NotFound />,
      },
      {
        path: "books/:bookId",
        element: <h1>Book Details</h1>,
        errorElement: <NotFound />,
      },
      {
        path: "books/add",
        element: <h1>Add New Book</h1>,
        errorElement: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
