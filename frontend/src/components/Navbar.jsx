import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container-page">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo-klusbedrijf.svg"
              alt="Klusbedrijf Meurs"
              className="h-12 w-auto"
            />

            <div className="hidden sm:block">
              <div className="font-bold text-gray-900">
                Klusbedrijf Meurs
              </div>
              <div className="text-xs text-gray-500">
                Vakwerk in en om het huis
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <a
              href="#afspraak"
              className="font-medium text-gray-700 transition hover:text-green-700"
            >
              Afspraak maken
            </a>

            <a
              href="#recensies"
              className="font-medium text-gray-700 transition hover:text-green-700"
            >
              Recensies
            </a>

            <NavLink to="/login" className={navLinkClass}>
              Inloggen
            </NavLink>
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
            aria-expanded={open}
          >
            <span className="text-2xl">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open && (
          <nav className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <a
                href="#afspraak"
                className="font-medium text-gray-700 hover:text-green-700"
                onClick={() => setOpen(false)}
              >
                Afspraak maken
              </a>

              <a
                href="#recensies"
                className="font-medium text-gray-700 hover:text-green-700"
                onClick={() => setOpen(false)}
              >
                Recensies
              </a>

              <NavLink
                to="/login"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Inloggen
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

