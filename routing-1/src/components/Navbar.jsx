import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import CartStore from '../context/CartContext'

const Navbar = () => {
  const { cartItem } = useContext(CartStore)

  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-wide text-emerald-700">
          Gaur Mart
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
            <NavLink to="/" className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700">
              Home
            </NavLink>
            <NavLink to="/contact" className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700">
              Contact
            </NavLink>
            <NavLink to="/about" className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700">
              About
            </NavLink>
            <NavLink to="/products" className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700">
              Products
            </NavLink>
          </div>
            
          <div className="flex items-center gap-3">
            <div className="relative">
              <NavLink
                to="/cart"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                  <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H7" />
                </svg>
              </NavLink>

              <span className="absolute -right-1 top-0 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-rose-500 px-1 text-[11px] font-bold leading-none text-white shadow-sm">
                {cartItem.length}
              </span>
            </div>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="8" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
