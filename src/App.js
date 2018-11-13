import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App
