import React, { useContext } from 'react'
import CartStore from '../context/CartContext'


const Cart = () => {
  const { cartItem } = useContext(CartStore)
  const totalAmount = cartItem.reduce(
    (total, item) => total + Number(item.price || 0) * (item.quantity || 1),
    0
  )

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_360px]">
        <section className="space-y-5">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  My Cart
                </p>
                <h1 className="mt-2 text-3xl font-black text-slate-900">
                  Shopping Cart
                </h1>
              </div>
              <p className="text-sm font-medium text-slate-500">{cartItem.length} items</p>
            </div>

            <div className="mt-6 space-y-5">
              {cartItem.length === 0 && (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
                  Your cart is empty right now.
                </div>
              )}

              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 p-5 transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 md:flex-row">
                    <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-slate-50 p-5 md:w-44">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                        {item.category}
                      </p>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h2>
                      <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-2xl font-extrabold text-slate-900">
                          ${Number(item.price).toFixed(2)}  
                        </span>
                        <span className="text-base text-slate-400 line-through">
                          $129.99
                        </span>
                        <span className="font-bold text-emerald-600">22% off</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-150 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 active:translate-y-0 active:scale-95">
                          -
                        </button>
                        <span className="rounded-2xl bg-slate-100 px-5 py-2 text-sm font-bold text-slate-900">
                          {item.quantity || 1}
                        </span>
                        <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-150 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 active:translate-y-0 active:scale-95">
                          +
                        </button>
                        <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-150 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md active:translate-y-0 active:scale-[0.98]">
                          Save For Later
                        </button>
                        <button className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-600 transition duration-150 hover:-translate-y-0.5 hover:bg-rose-100 hover:shadow-sm active:translate-y-0 active:scale-[0.98]">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Price Details
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">
            Cart Summary
          </h2>

          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Price ({cartItem.length} items)</span>
              <span className="font-semibold text-slate-900">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span className="font-semibold text-emerald-600">-$60.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery Charges</span>
              <span className="font-semibold text-emerald-600">Free</span>
            </div>
          </div>

          <div className="mt-6 border-y border-dashed border-slate-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Total Amount</span>
              <span className="text-2xl font-extrabold text-slate-900">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm font-semibold text-emerald-600">
            You will save $60.00 on this order
          </p>

          <button className="mt-6 w-full rounded-2xl bg-orange-500 px-5 py-4 text-sm font-bold text-white transition duration-150 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg active:translate-y-0 active:scale-[0.99]">
            Place Order
          </button>
        </aside>
      </div>
    </div>
  )
}

export default Cart
