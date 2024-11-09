import React from 'react'
import MainLayout from '@/components/layouts/MainLayout';

const page:React.FC = () => {
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
        <h2 className='text-4xl font-bold text-black text-center mb-8'>About STYLAR</h2>

        <div className='max-w-4xl w-full p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg'>
          <section>
            <p className="text-gray-500 leading-relaxed text-lg text-center">
              At Stylar, we believe that fashion is more than just clothing—it's a form of expression. Our mission is to empower individuals to embrace their unique style and express their personality with confidence and creativity.
              <br />
              <br />
              Founded on the idea that fashion should be inclusive, sustainable, and accessible to all, SHX offers curated collections that blend timeless elegance with bold, modern designs. We focus on high-quality materials, ethical production practices, and fashion-forward designs that make a statement.
              <br />
              <br />
              Inspired by the energy of city streets and the elegance of nature, SHX is committed to offering clothing that feels good to wear and even better to own. From everyday staples to head-turning pieces, we design with the belief that everyone should feel powerful in what they wear.
              <br />
              <br />
              Join the Stylar movement, where style meets purpose, and fashion becomes your story.
            </p>
          </section>
        </div>
      </main>
    </MainLayout>
  )
}

export default page


