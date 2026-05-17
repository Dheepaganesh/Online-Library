import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewBook } from "../redux/reducer.jsx";
import { CATEGORIES } from "../constants.js";

const AddNewBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const booksList = useSelector((state) => state.books.books);
  const [errors, setErrors] = useState({});

  // Validate the form data
  const validate = (data) => {
    const nextErrors = {};

    if (!data.title?.trim()) {
      nextErrors.title = "Title is required.";
    }
    if (!data.author?.trim()) {
      nextErrors.author = "Author is required.";
    }
    if (!data.description?.trim()) {
      nextErrors.description = "Description is required.";
    }
    if (!data.category?.trim()) {
      nextErrors.category = "Category is required.";
    }

    const rating = parseFloat(data.rating);
    if (data.rating === "" || Number.isNaN(rating)) {
      nextErrors.rating = "Rating is required.";
    } else if (rating < 0 || rating > 5) {
      nextErrors.rating = "Rating must be between 0 and 5.";
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const raw = Object.fromEntries(formData);
    const validationErrors = validate(raw);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const maxId = booksList.reduce(
      (max, book) => Math.max(max, Number(book.id) || 0),
      0,
    );

    const bookData = {
      id: maxId + 1,
      title: raw.title.trim(),
      author: raw.author.trim(),
      category: raw.category,
      description: raw.description.trim(),
      rating: parseFloat(raw.rating),
    };

    dispatch(addNewBook(bookData));
    navigate("/books/browse");
  };

  const inputClass = (field) =>
    `w-full rounded-3xl border bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:ring-2 focus:ring-cyan-500/20 ${
      errors[field]
        ? "border-rose-500 focus:border-rose-400"
        : "border-slate-700 focus:border-cyan-400"
    }`;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-4xl rounded border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
        <div className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
            Add new book
          </p>
          <h1 className="text-2xl font-black text-white sm:text-2xl">
            Add your next library favorite
          </h1>
          <p className="max-w-2xl text-slate-400">
            Fill in all fields below. After submitting, you will be redirected to
            Browse Books with your new title at the top of the list.
          </p>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-200">
                Title *
              </span>
              <input
                name="title"
                type="text"
                placeholder="Atomic Habits"
                className={inputClass("title")}
              />
              {errors.title && (
                <p className="text-sm text-rose-400">{errors.title}</p>
              )}
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-200">
                Author *
              </span>
              <input
                name="author"
                type="text"
                placeholder="James Clear"
                className={inputClass("author")}
              />
              {errors.author && (
                <p className="text-sm text-rose-400">{errors.author}</p>
              )}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-200">
                Category *
              </span>
              <select name="category" className={inputClass("category")}>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-sm text-rose-400">{errors.category}</p>
              )}
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-200">
                Rating *
              </span>
              <input
                name="rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="4.8"
                className={inputClass("rating")}
              />
              {errors.rating && (
                <p className="text-sm text-rose-400">{errors.rating}</p>
              )}
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-200">
              Description *
            </span>
            <textarea
              name="description"
              rows="5"
              placeholder="A practical guide to building good habits and breaking bad ones."
              className={inputClass("description")}
            />
            {errors.description && (
              <p className="text-sm text-rose-400">{errors.description}</p>
            )}
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Add book
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddNewBook;
