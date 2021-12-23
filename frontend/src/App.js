import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import About from './screens/About';
import ProductScreen from './screens/ProductScreen';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="product/:id" element={<ProductScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
