import React from 'react'
import MainLayout from '@/components/layouts/MainLayout';

const contact:React.FC = () => {
  const backgroundImageStyle = {
    backgroundImage:"url('https://www.intheblouse.com/wp-content/uploads/2023/05/clothes-grunge-background-shelf-cream-background-collection-clothes-hanging-rack-1-1024x683.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <MainLayout>
      <main
        style={backgroundImageStyle}
        className='min-h-screen flex flex-col justify-center items-center p-6'
      >
        <div className='max-w-3xl w-full bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-lg shadow-lg'>
          <h1 className='text-4xl font-bold mb-6 text-center text-black'>
            Contact Us
          </h1>
          <p className='text-lg leading-relaxed text-gray-500 text-center mb-8'>
            We’d love to hear from you! If you have any questions, feedback, or
            inquiries, feel free to reach out through the options below.
          </p>

          <div className='mb-8'>
            <p className='text-lg leading-relaxed text-gray-500'>
              For any questions or assistance, please
              email us at{' '}
              <a
                href='mailto:hanbinie@gmail.com'
                className='text-black underline hover:text-gray-500'
              >
                hanbinie@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-black mb-4'>
            </h2>
            <p className='text-lg leading-relaxed text-gray-500 mb-4'>
              Visit us on our social media channels for the latest
              updates, promotions, and style inspiration:
            </p>
            <ul className='flex justify-center space-x-8'>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-black underline hover:text-gray-500'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-black underline hover:text-gray-500'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-black underline hover:text-gray-500'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default contact


