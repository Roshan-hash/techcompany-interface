import React from 'react'
import Contact from './components/Contact/Contact'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import './App.css';
import Features from './components/Features/Features';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonial';

const App = () => {
  return (
    <div className='appcontainer'>
      <Navbar/>
      <Intro/>
      <Features/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
