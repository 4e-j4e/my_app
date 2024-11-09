import React from 'react'
import Link from 'next/link'

const Header:React.FC = () => {
  return (
    <header className='p-5 bg-white shadow-lg'>

      <nav className="container mx-auto flex justify-between items-center">
        <div className='space-x-5 px-5'>
          <h4 className='text-xl font-bold text-black'>S T Y L A R</h4>
        </div>
        <div className="space-x-5">
          <Link href="/" className='text-gray-700 hover:text-black transition'>Home</Link>
          <Link href="/about" className='text-gray-700 hover:text-black transition'>About</Link>
          <Link href="/services" className='text-gray-700 hover:text-black transition'>Services</Link>
          <Link href="/contact" className='text-gray-700 hover:text-black transition'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
