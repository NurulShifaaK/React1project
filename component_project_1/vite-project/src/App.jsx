// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './index.css'
// import './App.css'
// import Navbar from './compnonents/Navbar'
// import Header from './compnonents/header'
// import Hero from './compnonents/Hero'
// import Article from './compnonents/Article'
// import Table from './compnonents/Table'
// import Aside from './compnonents/Aside'
// import Footer from './compnonents/Footer'




// function App() {
  

//   return (
//     <>
//    <Navbar/>
//    <Header/>
//    <Hero/>
   
//    <div className='container flex flex-col md:flex-row mx-auto p-6'>
//     <main className='flex-1'>
//      <Article/>
//      <Table/>

//      </main>
  
  
//   <Aside/>
//   </div>
//    <Footer/>
// </>
//   )
// }

// export default App





import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/header';
import Hero from './components/Hero';
import Article from './components/Article';
import Table from './components/Table';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true); // new loading state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Firebase user:", currentUser);

      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }

      setChecking(false); // stop loading
    });

    return () => unsubscribe();
  }, [navigate]);

  if (checking) return <div className="p-10 text-center">Checking login...</div>;

  if (!user) return null; // just in case

  console.log("App page loaded");

  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className='container flex flex-col md:flex-row mx-auto p-6'>
        <main className='flex-1'>
          <Article />
          <Table />
        </main>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
