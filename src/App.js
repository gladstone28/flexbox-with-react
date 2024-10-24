import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Banner from './components/Banner';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Banner />
      <Expertise />
      <Footer />
    </div>
  );
}

export default App;
