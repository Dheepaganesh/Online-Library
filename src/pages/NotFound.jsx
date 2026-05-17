import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-[100vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12 text-slate-100">
      <div className="mx-auto flex h-[450px]  max-w-4xl flex-col items-center justify-center gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            404 · Page not found
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            The page you are looking for has wandered off the shelf. Let us
            guide you back to the homepage or browse the latest books.
          </p>
        </div>

        <div className="flex justify-center w-full gap-4 sm:grid-cols-2">
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
