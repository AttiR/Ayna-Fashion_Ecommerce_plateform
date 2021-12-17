import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <>
    <Header/>
      <main>
       <Home/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
