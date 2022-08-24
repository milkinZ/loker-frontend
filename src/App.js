import React from 'react'
import {Route, Routes } from "react-router-dom"
import Login from './pages/login'
import Beranda from './pages/beranda'

function App() {
  return (
    <Routes>
      <Route exact path = '/' element = {<Beranda/>}/> 
      <Route path = '/login' element = {<Login/>}/>
    </Routes>
  );
}

export default App;
