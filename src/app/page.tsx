"use server"
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Link from 'next/link';
import { getUsers } from '@/services/user.service';
import User from '@/types/user';


export default async function Home() {
  const users = await getUsers();
  
  const backgroundImageStyle = {
    backgroundImage: "url('https://www.intheblouse.com/wp-content/uploads/2023/05/clothes-grunge-background-shelf-cream-background-collection-clothes-hanging-rack-1-1024x683.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <MainLayout>
      <main
        style={backgroundImageStyle}
        className='min-h-screen flex items-center justify-center p-6'
      >
        <div className='flex w-full max-w-7xl'>
          <div className='w-1/2 flex flex-col justify-center py-4'>
            <h1 className='text-5xl text-center font-bold mb-6 text-black'>
              Style for Every Story
            </h1>
            <section className='text-center'>
              <p className='text-lg leading-relaxed text-gray-700 mb-4'>
                Elevate your wardrobe with our latest collection as STYLAR.
              </p>
              <p className='text-lg leading-relaxed text-gray-700'>
                Wear your Style! Be Bold. Be Stylish.
              </p>
            </section>
            <section className='text-center'>
              <Link href='/'>
                <button className='mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-500 transition'>
                  Shop Now
                </button>
              </Link>
            </section>
          </div>
          
          <div className='w-1/2 flex justify-between items-center px-10 bg-white backdrop-blur bg-opacity-10'>
            <section>
              <h1>User List</h1>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='px-5'>Id</th>
                    <th className='px-5'>Username</th>
                    <th className='px-5'>Fullname</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0
                    ? users.map((user: User, index: number) => {
                      return (
                        <tr key={index} className="px-2 bottom-2 w-full">
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.fullname}</td>
                        </tr>
                      );
                    })
                  : null}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
