import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, } from './pages';
import { Natural } from './pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="natural" element={<Natural />} />


        </Routes>
        <Footer />
      </BrowserRouter >


    </>
  )
}

export default App

