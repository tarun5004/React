import React, { useContext } from 'react'
import { ThemeMode } from '../context/ThemeContext.jsx'

const InstagramIcon = () => {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5'>
      <rect x='3.5' y='3.5' width='17' height='17' rx='5' stroke='currentColor' strokeWidth='1.8' />
      <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.8' />
      <circle cx='17.2' cy='6.8' r='1.1' fill='currentColor' />
    </svg>
  )
}

const FacebookIcon = () => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
      <path d='M13.5 21v-7h2.5l.4-3h-2.9V9.2c0-.9.3-1.5 1.6-1.5H16.5V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.4v7h3.1Z' />
    </svg>
  )
}

const MailIcon = () => {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5'>
      <rect x='3' y='5' width='18' height='14' rx='2.5' stroke='currentColor' strokeWidth='1.8' />
      <path d='m5 7 7 5 7-5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

const Contact = () => {
  const { themes } = useContext(ThemeMode)
  const isDark = themes === 'dark'

  const contactItems = [
    {
      label: 'Instagram',
      value: '@tarunrajgaur',
      href: 'https://instagram.com/tarunrajgaur',
      icon: <InstagramIcon />,
    },
    {
      label: 'Facebook',
      value: 'Tarun Raj Gaur',
      href: 'https://facebook.com/tarunrajgaur',
      icon: <FacebookIcon />,
    },
    {
      label: 'Email',
      value: 'tarunrajgaur@example.com',
      href: 'mailto:tarunrajgaur@example.com',
      icon: <MailIcon />,
    },
  ]

  return (
    <div className='flex min-h-full items-center justify-center p-6'>
      <div
        className={`w-full max-w-3xl rounded-3xl p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-colors duration-300 ${
          isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div
          className={`rounded-[24px] p-6 transition-colors duration-300 sm:p-8 ${
            isDark ? 'bg-zinc-900' : 'bg-[#fbfbfb]'
          }`}
        >
          <div className='mb-8 space-y-3'>
            <span className='inline-block rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-sky-500 uppercase'>
              Contact Profile
            </span>

            <div>
              <h1 className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Tarun Raj Gaur
              </h1>
              <p className={`mt-2 text-sm leading-6 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Frontend learner focused on clean UI, readable code, and practical React projects.
              </p>
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                className={`rounded-2xl border p-4 transition duration-300 ${
                  isDark
                    ? 'border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-800'
                    : 'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>
                  {item.icon}
                </div>

                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {item.label}
                </p>
                <p className='mt-2 text-sm font-semibold break-all'>{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
