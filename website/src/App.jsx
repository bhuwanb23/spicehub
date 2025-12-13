import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/home';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App
