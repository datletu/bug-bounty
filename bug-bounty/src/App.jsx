import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3000/api');
    console.log(response.data);
  };
  
  useEffect(() => {
    fetchAPI();
  } , []);

  return (
    <>

    </>
  )
}

export default App
