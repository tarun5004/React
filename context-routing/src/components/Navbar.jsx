import React from 'react'

const Navbar = ({ setThemes }) => {
  return (
    <div className='flex h-[10%] w-full items-center justify-between border-b border-black/10 bg-white/70 px-6 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-zinc-950/70'>
      <h1 className='text-2xl font-black tracking-tight text-zinc-900 transition-colors duration-300 dark:text-zinc-100'>
        Logo
      </h1>

      <div className='flex items-center gap-2 rounded-full border border-black/8 bg-black/[0.03] px-2 py-2 text-sm font-semibold text-zinc-700 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 sm:gap-3 sm:px-3'>
        <p className='cursor-pointer rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] dark:hover:bg-zinc-900 dark:hover:text-white dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]'>
          Home
        </p>
        <p className='cursor-pointer rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] dark:hover:bg-zinc-900 dark:hover:text-white dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]'>
          About
        </p>
        <p className='cursor-pointer rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] dark:hover:bg-zinc-900 dark:hover:text-white dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]'>
          Contact
        </p>
      </div>

      <button  className='cursor-pointer rounded-full border border-sky-500/20 bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(59,130,246,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(79,70,229,0.35)] dark:border-sky-400/20 dark:from-sky-400 dark:to-indigo-400'
        onClick={() => setThemes((prev) => prev === 'dark' ? 'light' : 'dark')}>
        Light
      </button>
    </div>
  )
}

export default Navbar
