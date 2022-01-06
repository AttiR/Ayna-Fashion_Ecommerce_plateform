import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

import About from './screens/About';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import NotFound from './components/NotFound';
import Contact from './screens/Contact';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />

            <Route path="/contact" element={<Contact />} />
           
            <Route path="/about" element={<About />} />

            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
