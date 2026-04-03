import React, { useContext } from 'react'
import { ThemeMode } from '../context/ThemeContext.jsx'

const About = () => {
  const { themes } = useContext(ThemeMode)
  const isDark = themes === 'dark'

  const highlights = [
    {
      title: 'Curated Products',
      description: 'Gaur E-Commerce handpicks daily-use and lifestyle products that balance quality, design, and practical pricing.',
    },
    {
      title: 'Fast Shopping Flow',
      description: 'The store focuses on a clean browsing experience so users can discover, compare, and order products without confusion.',
    },
    {
      title: 'Customer First',
      description: 'From product previews to support touchpoints, every section is designed to feel simple, trustworthy, and friendly.',
    },
  ]

  return (
    <div className='flex min-h-full items-center justify-center p-6'>
      <div
        className={`w-full max-w-4xl rounded-3xl p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-colors duration-300 ${
          isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div
          className={`rounded-[24px] p-6 transition-colors duration-300 sm:p-8 ${
            isDark ? 'bg-zinc-900' : 'bg-[#fbfbfb]'
          }`}
        >
          <div className='grid gap-6 lg:grid-cols-[1.3fr_0.9fr]'>
            <div>
              <span className='inline-block rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-500'>
                About Gaur E-Commerce
              </span>

              <h1 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                A shopping experience built around clarity, comfort, and trust.
              </h1>

              <p className={`mt-4 text-sm leading-7 sm:text-base ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Gaur E-Commerce is designed as a modern shopping platform where users can explore featured products,
                check key details quickly, and move from browsing to purchase without unnecessary complexity.
                The goal is to keep the interface simple while still feeling polished and reliable.
              </p>

              <p className={`mt-4 text-sm leading-7 sm:text-base ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                This project highlights a practical storefront layout with theme support, reusable React components,
                and a clean product presentation style that works well for electronics, fashion, accessories,
                and other everyday e-commerce categories.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 transition-colors duration-300 ${
                isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Store Vision
              </p>
              <h2 className={`mt-3 text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Better products, cleaner browsing, smoother buying.
              </h2>
              <p className={`mt-4 text-sm leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                The design approach behind Gaur E-Commerce is simple: make the user feel confident at every step,
                from product discovery to the final purchase decision.
              </p>
            </div>
          </div>

          <div className='mt-8 grid gap-4 md:grid-cols-3'>
            {highlights.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 transition-colors duration-300 ${
                  isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
                }`}
              >
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
