import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../constants.js";

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const navigate = useNavigate();
  const popularBooks = [...books]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                Welcome
              </p>
              <h1 className="text-5xl font-black text-white sm:text-6xl">
                Discover books that feel like home.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Browse curated categories, explore popular titles, and add your
                own favorites to keep your library growing.
              </p>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-6 text-slate-300 shadow-inner">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                Top categories
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-left text-slate-100 transition hover:border-cyan-500/50"
                    onClick={() => navigate(`/books/${category}`)}
                  >
                    <p className="text-lg font-semibold">{category}</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Popular stories in {category}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                Popular books
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Trending reads
              </h2>
            </div>
            <Link
              to="/books/browse"
              className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
            >
              View all books →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {popularBooks.map((book) => (
              <article
                key={book.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-slate-700 px-3 py-1">
                    {book.category}
                  </span>
                  <span className="font-semibold text-cyan-300">
                    ⭐ {book.rating.toFixed(1)}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {book.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">by {book.author}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {book.description}
                </p>
                <Link
                  to={`/books/details/${book.id}`}
                  className="mt-6 inline-flex items-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View details
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
