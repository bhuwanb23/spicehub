import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Category from './pages/category/category';
import Product from './pages/product/product';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import About from './pages/about/about';
import Search from './pages/search/search';
import Account from './pages/account';
import Contact from './pages/contact/contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/category/:categoryName" element={<Category />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                  <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                  <Route path="/our-story" element={<About />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
                  <Route path="/account/orders/:orderId" element={<ProtectedRoute><Account /></ProtectedRoute>} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;