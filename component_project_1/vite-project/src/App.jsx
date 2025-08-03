import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Navbar from './compnonents/Navbar'
import Header from './compnonents/header'
import Hero from './compnonents/Hero'
import Article from './compnonents/Article'
import Table from './compnonents/Table'
import Aside from './compnonents/Aside'
import Footer from './compnonents/Footer'




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





