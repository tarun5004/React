import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CartStore from '../context/CartContext'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const {setCartItem} = useContext(CartStore)

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchSingleProduct()
  }, [id])

  //add to cart handler
  const handleAddToCart = () => {
    setCartItem((prev) => [...prev, { ...product, quantity: 1 }])
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">Loading product...</h1>
          <p className="mt-3 text-slate-600">Fetching product details for id {id}.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[430px_1fr]">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] w-full object-contain p-8"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center text-sm font-semibold text-slate-600">
              {product.category}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center text-sm font-semibold text-slate-600">
              Product #{product.id}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleAddToCart}
              alert
              className="flex-1 rounded-2xl bg-amber-400 px-4 py-3 font-bold text-slate-900 transition duration-150 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg active:translate-y-0 active:scale-[0.99]"
            >
              Add to Cart
            </button>
            <button className="flex-1 rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white">
              Buy Now
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Product Details
          </p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-slate-900">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
              {product.category}
            </span>
            <span>Fetched using route id</span>
          </div>

          <div className="mt-6">
            <span className="text-4xl font-extrabold text-slate-900">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-50 p-5">
            <h2 className="text-lg font-bold text-slate-900">Description</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {product.description || 'Product details will appear here.'}
            </p>
          </div>

          <div className="mt-6 grid gap-5 text-sm text-slate-600 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-base font-bold text-slate-900">Quick Info</h3>
              <ul className="space-y-2">
                <li>Category: {product.category}</li>
                <li>Price: ${Number(product.price).toFixed(2)}</li>
                <li>Product ID: {product.id}</li>
                <li>API shape: title, price, description, category, image</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-base font-bold text-slate-900">Layout Focus</h3>
              <ul className="space-y-2">
                <li>Large product image</li>
                <li>Clean title and category display</li>
                <li>Single visible price block</li>
                <li>Readable description section</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
