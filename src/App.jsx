import React from 'react'
import "./assets/scss/custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHero from './components/sections/CardHero'
import Activity from './components/sections/Activity';
import NewsCarousel from './components/sections/NewsCarousel';
import Online from './components/sections/Online';
import Navbar from './components/layouts/navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <CardHero />
      <Activity />
      <NewsCarousel />
      <Online />

    </>
  )
}

export default App
