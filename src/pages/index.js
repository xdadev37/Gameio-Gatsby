import React from 'react'
import MainPage from './Main/index'
import Navbar from './Navbar/Navbar'
import Guide from './Guide/index'
import Game from './GameRunPage/GameRunPage'

const Index = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Guide />
      <Game />
    </>
  );
}

export default Index;