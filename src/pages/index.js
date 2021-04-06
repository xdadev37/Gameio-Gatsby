import React, { Suspense, lazy } from 'react'
const MainPage = lazy(() => import('./Main/index'))
const Navbar = lazy(() => import('./Navbar/Navbar'))
const Guide = lazy(() => import('./Guide/index'))
const Game = lazy(() => import('./GameRunPage/GameRunPage'))
const About = lazy(() => import('./About/About'))

const Index = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>} >
      <Navbar />
      <MainPage />
      <Guide />
      <Game />
      <About />
    </Suspense>
  );
}

export default Index;