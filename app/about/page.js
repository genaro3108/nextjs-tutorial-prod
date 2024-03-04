import React from 'react'
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='text-7xl'>
      <h1>AboutPage</h1>
      <Link
        href='/'
        className='text-2xl'
      >
        Home
      </Link>
    </div>
  )
}

export default AboutPage;