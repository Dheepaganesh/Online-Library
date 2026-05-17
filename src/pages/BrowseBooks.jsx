import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../constants.js";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by route category, then by search 
  const bookList = useMemo(() => {
    let filtered = books;

    if (category) {
      filtered = filtered.filter(
        (book) =>
          book.category?.toLowerCase() === category.toLowerCase(),
      );
    }

    const term = searchTerm.trim().toLowerCase();
    if (term) {
      filtered = filtered.filter(
        (book) =>
          book.title?.toLowerCase().includes(term) ||
          book.author?.toLowerCase().includes(term),
      );
    }

    return filtered;
  }, [books, category, searchTerm]);

  const pageTitle = category
    ? `${category} books`
    : "Discover your next favorite read";

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
              Browse
            </p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              {pageTitle}
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400 sm:text-lg">
              {category
                ? `Showing all books in the ${category} category.`
                : "Explore the full collection or pick a category from the home page."}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/books/browse"
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  !category
                    ? "bg-cyan-500 text-slate-950"
                    : "border border-slate-700 text-slate-300 hover:border-cyan-400"
                }`}
              >
                All books
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  to={`/books/${cat}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    category === cat
                      ? "bg-cyan-500 text-slate-950"
                      : "border border-slate-700 text-slate-300 hover:border-cyan-400"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex w-full max-w-xl items-center gap-3 rounded-3xl border border-slate-700 bg-slate-950/90 p-3 shadow-inner sm:w-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or author"
              className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bookList.map((book) => (
            <article
              key={book.id}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-500" />
              <div className="ml-5 flex h-full flex-col justify-between gap-5">
                <div>
                  <span className="inline-flex rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">
                    {book.category}
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-white">
                    {book.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-400">
                    by {book.author}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm leading-6 text-slate-300">
                    {book.description ||
                      "A captivating read waiting to be discovered."}
                  </p>
                  <Link
                    to={`/books/details/${book.id}`}
                    className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {bookList.length === 0 && (
            <div className="col-span-full rounded-[2rem] border border-dashed border-slate-700 bg-slate-900/80 p-10 text-center text-slate-400">
              No books found. Try another category or search term.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default BrowseBooks;
