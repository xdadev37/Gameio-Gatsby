import React from 'react'
import MainPage from './Main/index'
import Navbar from './Navbar/Navbar'
import Guide from './Guide/index'
import Game from './GameRunPage/GameRunPage'
import About from './About/About'

const Index = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Guide />
      <Game />
      <About />
    </>
  );
}

export default Index;