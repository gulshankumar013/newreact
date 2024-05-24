import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import React from 'react'
import Productlist from './component/Productlist'


const App = () => {
  return (
    <div>
      <Header/>
      <Productlist/>
    </div>
  )
}

export default App

