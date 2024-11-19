import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Developers from './components/Developers';
import Community from './components/Community';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <Developers />
      <Community />
      <GetStarted />
    </div>
  );
}

export default App;