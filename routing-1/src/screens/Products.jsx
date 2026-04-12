import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import CartStore from '../context/CartContext'

const missionBadges = [
  {
    title: 'Daily Quest',
    label: '3 items unlock free vibe points',
    accent: 'from-fuchsia-500 via-rose-500 to-orange-400',
  },
  {
    title: 'Boss Drop',
    label: 'High-rated loot gives double hype',
    accent: 'from-cyan-500 via-sky-500 to-indigo-500',
  },
  {
    title: 'Combo Bonus',
    label: 'Mix categories to level up faster',
    accent: 'from-emerald-500 via-lime-500 to-yellow-400',
  },
]

const tierTheme = {
  Legendary: {
    card: 'border-amber-200/70 bg-white/85 shadow-[0_25px_60px_-30px_rgba(245,158,11,0.75)]',
    badge: 'bg-amber-300 text-slate-950',
    orb: 'from-amber-300 via-yellow-200 to-orange-400',
  },
  Epic: {
    card: 'border-fuchsia-200/70 bg-white/85 shadow-[0_25px_60px_-30px_rgba(217,70,239,0.65)]',
    badge: 'bg-fuchsia-500 text-white',
    orb: 'from-fuchsia-400 via-pink-300 to-violet-500',
  },
  Rare: {
    card: 'border-cyan-200/70 bg-white/85 shadow-[0_25px_60px_-30px_rgba(6,182,212,0.6)]',
    badge: 'bg-cyan-500 text-white',
    orb: 'from-cyan-300 via-sky-200 to-blue-400',
  },
  Common: {
    card: 'border-slate-200/80 bg-white/85 shadow-[0_25px_60px_-30px_rgba(100,116,139,0.35)]',
    badge: 'bg-slate-800 text-white',
    orb: 'from-slate-300 via-slate-100 to-slate-400',
  },
}

const formatPrice = (price) => `$${Number(price).toFixed(2)}`

const getTier = (product) => {
  const rating = product.rating?.rate || 0

  if (product.price > 140 || rating >= 4.6) return 'Legendary'
  if (product.price > 90 || rating >= 4.2) return 'Epic'
  if (product.price > 50 || rating >= 3.8) return 'Rare'
  return 'Common'
}

const getXpValue = (product) => Math.round((product.rating?.rate || 4) * 24 + product.price / 3)

const Products = () => {
  const navigate = useNavigate()
  const { cartItem, setCartItem } = useContext(CartStore)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = ['all', ...new Set(products.map((product) => product.category))]
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'all' || product.category === activeCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })
  const spotlightProducts = [...filteredProducts]
    .sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
    .slice(0, 3)
  const unlockedXp = filteredProducts.reduce((total, product) => total + getXpValue(product), 0)
  const missionProgress = Math.min((cartItem.length / 3) * 100, 100)
  const cartValue = cartItem.reduce(
    (total, product) => total + Number(product.price) * (product.quantity || 1),
    0,
  )

  const handleAddToCart = (product) => {
    setCartItem((prev) => {
      const isExisting = prev.find((item) => item.id === product.id)

      if (isExisting) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#312e81,_#111827_45%,_#020617)] px-6 py-8 text-white">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Loading Arena</p>
          <h1 className="mt-4 text-4xl font-black">Loot lobby is warming up...</h1>
          <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#312e81,_#111827_40%,_#020617)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 px-6 py-8 text-white shadow-[0_30px_120px_-30px_rgba(15,23,42,0.9)] sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.35),_transparent_28%),radial-gradient(circle_at_85%_15%,_rgba(217,70,239,0.28),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.3),_transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
                Product Quest Arena
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Shop nahi, loot run hai. Har card ek reward chest jaisa feel hona chahiye.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Explore the catalogue, chase rare finds, and stack your cart like a high-score
                run. Search, filter, and quick-loot directly from this screen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Unlocked XP</p>
                  <p className="mt-2 text-3xl font-black text-cyan-200">{unlockedXp}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Loot Bag</p>
                  <p className="mt-2 text-3xl font-black text-amber-200">{cartItem.length} items</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Cart Power</p>
                  <p className="mt-2 text-3xl font-black text-fuchsia-200">{formatPrice(cartValue)}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Daily Mission</p>
                  <h2 className="mt-2 text-2xl font-black">Fill 3 slots to unlock combo</h2>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-sm font-bold text-emerald-200">
                  {Math.round(missionProgress)}%
                </span>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400 transition-all duration-500"
                  style={{ width: `${missionProgress}%` }}
                />
              </div>

              <div className="mt-6 space-y-3">
                {missionBadges.map((badge) => (
                  <div
                    key={badge.title}
                    className="flex items-center gap-4 rounded-3xl border border-white/8 bg-slate-950/40 p-4"
                  >
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${badge.accent}`} />
                    <div>
                      <p className="text-sm font-bold text-white">{badge.title}</p>
                      <p className="text-sm text-slate-300">{badge.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-xl shadow-slate-950/5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                Search Console
              </p>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search loot by title or category"
                className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white"
              />

              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-bold capitalize transition ${
                      activeCategory === category
                        ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-xl shadow-slate-950/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                    Top Raid Picks
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">Leaderboard loot</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {spotlightProducts.length} live
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {spotlightProducts.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => navigate(`/productPage/${product.id}`)}
                    className="flex w-full items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-3 text-left transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                      #{index + 1}
                    </div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-14 w-14 rounded-2xl bg-white object-contain p-2"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-black text-slate-900">{product.title}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                        {getTier(product)} Tier
                      </p>
                    </div>
                    <p className="text-sm font-black text-slate-900">{formatPrice(product.price)}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-700">
                  Active Inventory
                </p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  {filteredProducts.length} loot drops ready
                </h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur">
                Search: {searchTerm ? `"${searchTerm}"` : 'All items'}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {filteredProducts.map((product) => {
                const tier = getTier(product)
                const tierStyle = tierTheme[tier]
                const quantity =
                  cartItem.find((item) => item.id === product.id)?.quantity || 0

                return (
                  <article
                    key={product.id}
                    className={`group relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-2 ${tierStyle.card}`}
                  >
                    <div
                      className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-70 blur-2xl transition duration-300 group-hover:scale-125 group-hover:opacity-100 ${tierStyle.orb}`}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.25em] ${tierStyle.badge}`}
                        >
                          {tier}
                        </span>
                        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                          +{getXpValue(product)} XP
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-4">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.5rem] bg-slate-50 p-3">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                            {product.category}
                          </p>
                          <h3 className="mt-2 line-clamp-2 text-xl font-black text-slate-900">
                            {product.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-600">
                        {product.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between rounded-3xl bg-slate-950 px-4 py-3 text-white">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                            Price
                          </p>
                          <p className="mt-1 text-2xl font-black">{formatPrice(product.price)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                            Rating
                          </p>
                          <p className="mt-1 text-lg font-black text-amber-300">
                            {product.rating?.rate || 4} / 5
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <button
                          onClick={() => navigate(`/productPage/${product.id}`)}
                          className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                        >
                          Inspect
                        </button>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
                        >
                          {quantity > 0 ? `Loot Again (${quantity})` : 'Quick Loot'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="mt-6 rounded-[1.75rem] border border-dashed border-white/20 bg-white/10 p-10 text-center text-white backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                  No drops found
                </p>
                <h3 className="mt-3 text-2xl font-black">Search reset karke phir se raid chalao.</h3>
                <p className="mt-2 text-slate-300">
                  Try another keyword or switch category to reveal more products.
                </p>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products
