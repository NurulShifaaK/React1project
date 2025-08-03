import React from 'react'

const Article = () => {
  return (
    <>
  <h2 className='font-bold text-2xl  mt-6 p-4'>📰Latest News</h2>
  <div className="container flex flex-col gap-4 justify-center items-center mt-4">
   
    <div className='newsimg flex gap-8 shadow-xl bg-white p-6 justify-center items-center'>
        <img src='/news.jpeg' className='h-40 w-2/5 rounded-xl'></img>
        <div className='w-56' >
            <h2 className='font-bold'>Vite is Revolutionzing Frontend</h2>
            <p>Vite is a next-gen Frontend tool that delvers fast development.</p>
        </div>
    </div>
  </div>
  </>
  )
}

export default Article