import React from 'react';
import Navigationbar from './components/Navbar';
import Home from './components/Home';
import Medicine from './components/Medicine';

function App() {
  return (
    <div className='vh-100 bg-light'>
      <Navigationbar />
      <Home />
      {/* <Medicine /> */}
    </div>
  );
}

export default App;
