import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () =>{
  return (
    <>
      <Header />
      <main>
        <Contact  age='34' />
      </main>
      <Footer />
    </>
  );
}

export default App;
