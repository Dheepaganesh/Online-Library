import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-slate-100 shadow-sm shadow-slate-900/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-100 hover:text-white"
        >
          Online Library
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/books/browse"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            Browse Books
          </Link>
          <Link
            to="/books/add"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            Add New Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
