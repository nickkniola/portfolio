import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import BootstrapProject from './components/BootstrapProject';
import ReactProject from './components/ReactProject';
import Contact from './components/Contact';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Header />
      <Profile id="section1"/>
      <ReactProject />
      <BootstrapProject />
      <Contact />
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
