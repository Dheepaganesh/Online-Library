# Online Library

A React online library app built with Vite, React Router, Redux Toolkit, and Tailwind CSS.

## Features

- **Home** — Welcome message, book categories, and 3 popular book cards
- **Browse Books** — Search by title or author, filter by category
- **Book Details** — View title, author, description, and rating
- **Add Book** — Validated form; new books appear at the top of the browse list
- **404** — Standalone page (no navbar) showing the invalid URL

## Setup

```bash
# Clone the repository
git clone https://github.com/Dheepaganesh/Online-Library.git
cd Online-Library

# Install dependencies
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # Navbar
  pages/        # Home, BrowseBooks, BookDetails, AddNewBook, NotFound
  redux/        # Redux store and books slice
  data/         # Dummy book seed data
  constants.js  # Shared category list
```

## Technology used

- React Router
- Redux Toolkit
- Tailwind CSS
