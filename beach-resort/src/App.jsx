import { useState } from 'react'
import './App.css'

import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Room />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} /> 
        <Route element={<Error/>}/>
      <Route/>
    </Routes>
    </>
  )
}

export default App
