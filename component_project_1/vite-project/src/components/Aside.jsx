import React from 'react'
import{
    FaBook,
    FaReact,
    FaRocket,

} from "react-icons/fa"
const Aside = () => {
  return (
    <aside className='bg-slate-300 p-6 rounded-xl h-39 m-6'>
        <h2 className='font-bold text-2xl'>📌 Related Links</h2>
        <ul className='flex flex-col gap-4 mt-2'>
            <li><a href="#" className='flex gap-2 items-center hover:underline'> <FaBook/> Vite Documentation</a></li>
            <li><a href="#" className='flex gap-2 items-center hover:underline'> <FaReact/>React Guide</a></li>
            <li><a href="#" className='flex gap-2 items-center hover:underline'> <FaRocket/>Frotend Trends</a></li>
        </ul>
    </aside>
  )
}

export default Aside