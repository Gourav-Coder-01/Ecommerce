import React from 'react'

const Notified = () => {
  return (
    <div data-aos="flip-up" className='w-full mt-10 py-8 px-4 text-white font-bold mx-auto flex flex-col justify-center items-center bg-linear-45 from-[#fea928] to-orange-500'>
      <div className='space-y-5' >
            <h1 className='text-4xl max-sm:text-2xl'>Get Notified About New Products</h1>
            <div className='flex gap-1 justify-center items-center max-wl:flex-col'>
            <input type="email" placeholder='Enter Your Email' className='bg-white text-black outline-0 px-3 py-4 w-full rounded-2xl' />
            <button className='bg-red-500 px-3 py-2 rounded-2xl outline-0 cursor-pointer hover:bg-red-600 hover:text-yellow-300'>Submit</button>
            </div>
      </div>
    </div>
  )
}

export default Notified
