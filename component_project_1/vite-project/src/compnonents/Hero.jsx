import React from 'react'

const Hero = () => {
  return (
   <div className="container flex flex-col justify-center items-center gap-3 mt-6">
    <video width="340" height="300" controls autoPlay muted loop className='rounded-xl'>
    <source src="/car.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h1 className='font-bold text-2xl'>🎨 Build Amazing UIs With React & Vite </h1>
    <p>Fast,lightweight,and modern frotend development.</p>
    <button className='bg-slate-900 text-white p-2 rounded-xl px-8'>🚀 Get Started</button>

   </div>
  )
}

export default Hero