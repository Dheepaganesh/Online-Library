import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Welcome to the Bookstore!</h1>,
      },
      {
        path: "/books/browse",
        element: <h1>Browse all books</h1>,
      },
      {
        path: "books/browse/:category",
        element: <h1>Books in category</h1>,
      },
      {
        path: "books/:bookId",
        element: <h1>Book Details</h1>,
      },
      {
        path: "books/add",
        element: <h1>Add New Book</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
