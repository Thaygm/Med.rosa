import React from 'react';
import Home from '../pages/Home';
import Medicine from '../pages/Medicine';
import { Route, Routes } from 'react-router-dom';

export default function PublicRoute () {
  return (
    <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/medicine/:numProcesso' element={<Medicine/>}  />
    </Routes>
  )
}

