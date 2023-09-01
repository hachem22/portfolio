import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/footer'
import AboutPage from './components/About'
import './App.css'


export default function App() {
  return (
    <div>
      <NavBar/>
      <Footer/>
      <AboutPage/>
    </div>
  );
}