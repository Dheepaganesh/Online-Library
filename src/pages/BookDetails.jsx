import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Single-book detail view 
const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const book = books.find((item) => String(item.id) === String(id));

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10">
      {!book && (
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-900/90 px-8 py-14 text-center shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Not found
          </p>
          <h1 className="mt-6 text-4xl font-black text-white">Book not found</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We could not find a book with id{" "}
            <span className="font-semibold text-white">{id}</span>.
          </p>
          <Link
            to="/books/browse"
            className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Back to Browse
          </Link>
        </div>
      )}

      {book && (
        <div className="mx-auto max-w-5xl">
          <Link
            to="/books/browse"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white"
          >
            ← Back to Browse
          </Link>

          <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                  Book detail
                </p>
                <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  {book.title}
                </h1>
                <p className="mt-3 text-lg text-slate-400">by {book.author}</p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-4 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-white">Category</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {book.category}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="font-semibold text-white">Rating</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    &#11088; {book.rating?.toFixed(1) ?? "—"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Description
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                {book.description ||
                  "A thoughtful book description would appear here."}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default BookDetails;
