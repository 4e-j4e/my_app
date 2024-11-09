import React from 'react'
import MainLayout from '@/components/layouts/MainLayout';

const services:React.FC = () => {
  const backgroundImageStyle = {
    backgroundImage:"url('https://www.intheblouse.com/wp-content/uploads/2023/05/clothes-grunge-background-shelf-cream-background-collection-clothes-hanging-rack-1-1024x683.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const serviceList = [
    {
      title: "Personal Styling",
      description: "Enjoy personalized styling consultations through our website, helping you choose the perfect outfits that match your style."
    },
    {
      title: "Custom Orders",
      description: "Easily place custom orders for unique clothing items designed just for you, all from the comfort of your home."
    },
    {
      title: "Style Guides",
      description: "Access our exclusive online style guides and resources to help you navigate the latest trends and styling tips."
    },
    {
      title: "Sustainable Fashion Tips",
      description: "Explore our online resources for sustainable fashion practices, helping you make eco-friendly choices in your wardrobe."
    },
    {
      title: "Customer Support",
      description: "While we don’t have a dedicated support team, feel free to contact us with any inquiries or styling advice you need while shopping.",
      center: true,
    },
  ];


  return (
    <MainLayout>
      <main
        style={backgroundImageStyle}
        className='min-h-screen flex flex-col justify-center items-center'
      >
        <div className='max-w-5xl w-full bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-center text-black mb-6'>Our Services</h1>
          <p className='text-lg leading-relaxed text-center text-gray-500 mb-4'>
            At Stylar, we specialize in providing online fashion services to enhance your shopping experience:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {serviceList.map((service, index) => (
              <div key={index} className={`bg-white bg-opacity-80 rounded-lg p-4 shadow-md text-center ${service.center ? 'col-span-full mx-auto' : ''}`}>
                <h2 className='text-xl font-semibold mb-2'>{service.title}</h2>
                <p className='text-gray-700'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default services


