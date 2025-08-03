import React from 'react'
 

const Footer = () => {
  return (
   <div className="container bg-slate-900 w-auto h-64 rounded-xl text-white flex flex-col justify-center items-center gap-6">
   <span className='font-bold text-2xl'>Trends 🌎 2025 My website.All Rights Reserved.</span>
     <div className='flex gap-5'>
        <a href="#" className='hover:underline hover:text-gray-700'>Facebook</a>
        <a href="#"  className='hover:underline hover:text-gray-700'>Linkedin</a>
        <a href="#"  className='hover:underline hover:text-gray-700'>Github</a>
     </div>
   </div>
  )
}

export default Footer