import React from 'react'
import Img1 from "../../assets/women/women2.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Sale = () => {
  return (
    <div className='w-[80%] mx-auto mt-30 px-6 max-sm:w-full dark:text-white dark:bg-gray-900 pb-3 rounded-2xl'>
      <div className='flex sm:flex-row flex-col justify-between items-center gap-4'>
            <div className='w-[400px] max-wl:w-[200px] max-wl276:w-[150px]' data-aos="fade-right">
                  <img src={Img1} alt="image" className='rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] hover:scale-101 duration-200' />
            </div>
            <div className='w-[450px] max-wl276:w-[150px] max-wl:max-w-[300px] flex flex-col flex-wrap space-y-3 max-sm:text-center' data-aos="fade-left">
                  <h1 className='text-4xl font-bold max-sm:text-2xl'>Winter Sale upto 50% off</h1>
                  <p className='text-xs text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis vel molestiae eos odio rem dignissimos. Harum quasi consequuntur mollitia.</p>
                  <div className='space-y-6'>
                        <span className='flex items-center space-x-3'>
                              <GrSecure className='bg-violet-200 w-10 h-10 p-3 rounded-full'/>
                              <h2>Quality Products</h2>
                        </span>
                        <span className='flex items-center space-x-3'>
                              <IoFastFood className='bg-orange-200 w-10 h-10 p-3 rounded-full'/>
                              <h2>Fast Delivery</h2>
                        </span>
                        <span className='flex items-center space-x-3'>
                              <GiFoodTruck className='bg-green-200 w-10 h-10 p-3 rounded-full'/>
                              <h2>Easy Payment Method</h2>
                        </span>
                        <span className='flex items-center space-x-3'>
                              <GiFoodTruck className='bg-yellow-200 w-10 h-10 p-3 rounded-full'/>
                              <h2>Get Offers</h2>
                        </span>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Sale
