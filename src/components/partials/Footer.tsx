import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer className='bg-white text-center text-black p-10'>
      <div className='container mx-auto'>
        <p>&copy; 2024 STYLAR. All rights reserved.</p>
        <div className='flex justify-center space-x-5 mt-5'>
          <a href="/" className='hover:text-gray-400'>Facebook</a>
          <a href="/" className='hover:text-gray-400'>Twitter</a>
          <a href="/" className='hover:text-gray-400'>Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
