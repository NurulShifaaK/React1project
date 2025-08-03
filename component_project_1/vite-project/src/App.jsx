import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/header'
import Hero from './components/Hero'
import Article from './components/Article'
import Table from './components/Table'
import Aside from './components/Aside'
import Footer from './components/Footer'




function App() {
  

  return (
    <>
   <Navbar/>
   <Header/>
   <Hero/>
   
   <div className='container flex flex-col md:flex-row mx-auto p-6'>
    <main className='flex-1'>
     <Article/>
     <Table/>

     </main>
  
  
  <Aside/>
  </div>
   <Footer/>
</>
  )
}

export default App





