import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import BootstrapProject from './components/BootstrapProject';
import ReactProject from './components/ReactProject';

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={["fal", "coffee"]} />
      <Header />
      <Profile />
      <ReactProject />
      <BootstrapProject />
      <Footer />
    </div>
  );
}

export default App;
