import React, { useState } from 'react';
import './App.css';
import './reset.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
function App() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
   <>
   
   <Navbar/>
   
   
   </>
  );
}

export default App;
