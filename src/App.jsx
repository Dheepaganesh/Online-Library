import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import booksData from "./data/index.js";
import { updateBookData } from "./redux/reducer.jsx";

function App() {
  const dispatch = useDispatch();

  // Update the book data on first render
  useEffect(() => {
    dispatch(updateBookData(booksData));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
