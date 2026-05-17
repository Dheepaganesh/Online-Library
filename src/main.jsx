import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import AddNewBook from "./pages/AddNewBook.jsx";
import NotFound from "./pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

// App layout routes include the Navbar; the catch-all 404 route is outside App (no header).
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books/browse",
        element: <BrowseBooks />,
      },
      {
        path: "books/add",
        element: <AddNewBook />,
      },
      {
        path: "books/details/:id",
        element: <BookDetails />,
      },
      // Dynamic category route, e.g. /books/Fiction
      {
        path: "books/:category",
        element: <BrowseBooks />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
