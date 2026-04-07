import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const ProductCard = ({ product, onClick }) => {
  const title = product.title || product.name
  const price =
    typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price
  const description = product.description || 'Open product page to see full details.'

  return (
    <div
      onClick={onClick}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={product.image}
        alt={title}
        className="h-52 w-full bg-slate-50 object-contain p-6"
      />
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
          {product.category}
        </p>
        <h3 className="line-clamp-2 min-h-14 text-lg font-bold text-slate-900">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-slate-500">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-extrabold text-slate-900">{price}</span>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            View Product
          </button>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const [apiProduct, setApiProduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setApiProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <section className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-900 px-8 py-14 text-white shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Gaur Mart Tech Sale
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
          Explore trending gadgets and open any product for full details
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Practice dynamic routing by clicking any product card below. Each card
          opens its own product page with the clicked item details.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Click any card to open product page
            </h2>
          </div>
          <p className="text-sm font-medium text-slate-500">{apiProduct.length} products</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {apiProduct.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() =>
                navigate(`/productPage/${product.id}`, {
                  state: { product },
                })
              }
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
