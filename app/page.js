import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-5xl mb-8 font-bold'>
      <h1>Next.js tutorial</h1>
      <Link
        href='/client'
        className='btn btn-accent'
      >
        Get Started
      </Link>
    </div>
  )
}

export default HomePage;