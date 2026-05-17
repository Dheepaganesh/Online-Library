import { Link, useLocation } from "react-router-dom";

// Error page 
const NotFound = () => {
  const location = useLocation();

  return (
    <main className="flex h-[100vh] items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12 text-slate-100">
      <div className="mx-auto flex h-[450px] max-w-4xl flex-col items-center justify-center gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            404 · Page not found
          </p>
          <h1 className="mt-6 text-4xl font-black text-white">
            Page not found
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            The URL{" "}
            <code className="rounded-lg bg-slate-800 px-2 py-1 text-cyan-300">
              {location.pathname}
            </code>{" "}
            does not exist in this library.
          </p>
        </div>

        <div className="flex w-full justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Take me home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
