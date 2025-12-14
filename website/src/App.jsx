import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Category from './pages/category/category';
import Product from './pages/product/product';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import About from './pages/about/about';
import Search from './pages/search/search';
import Account from './pages/account';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
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
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/our-story" element={<About />} />
                <Route path="/search" element={<Search />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;