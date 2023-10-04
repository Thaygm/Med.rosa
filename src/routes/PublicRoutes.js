import React from 'react';
import Home from '../components/Home';
import Medicine from '../components/Medicine';
import { Route, Routes } from 'react-router-dom';

export default function PublicRoute () {
  return (
    <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/medicine' element={<Medicine/>}  />
    </Routes>
  )
}

