import React, { useEffect } from 'react'
import { useState } from 'react'
import image from '../images/svg-1.svg'
import icon from '../images/svg-2.svg'

const Home = () => {

 
  return (
    <section>
        <main className='grid xl:grid-cols-3 ml-10  mt-20 xl:mt-0'>

        <div className='col-span-1 flex flex-col justify-center items-center'>

          <h1 className='capitalize xl:text-5xl text-3xl text-gray-700 xl:text-left text-center '>Enjoy with best <span className='text-sky-500 font-semibold'>web</span><span className='text-orange-500 font-semibold' >Chat</span></h1>
          <p className='mt-10 text-lg text-gray-500  xl:text-left text-center'>allows users to communicate in real-time using easily accessible web interfaces, With Us, you'll get fast, simple, secure messaging <span className='xl:block'></span>  for free, available all over the world.</p>
          <div>
            <button className='px-5 py-3 bg-orange-500 text-white rounded-md my-4'>Let's Chat</button>
          </div>

        </div>

        <div className='col-span-2 flex justify-end bg-gradient-to-tl from-sky-500 to-cyan-200 rounded-l-full mt-3 relative'>
          <img className='' src={image} alt="" />
          <span className='absolute xl:top-32 top-4 rounded-2xl left-10 px-10 py-3 bg-white '>
            <img className='xl:h-56 h-20' src={icon} alt="" srcset="" />
          </span>
        </div>

      </main>
    </section>
  )
}

export default Home