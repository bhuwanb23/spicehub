import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold text-brand-brown-700 mb-8">Welcome to Aroma Spice Co.</h1>
          <p className="text-lg text-brand-brown-600 max-w-2xl mb-12">Discover our premium collection of authentic spices sourced directly from farms around the world.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-cream rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-4">Premium Quality</h2>
              <p className="text-brand-brown-600">Hand-selected spices with unmatched aroma and flavor profiles.</p>
            </div>
            <div className="bg-brand-cream rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-4">Farm Fresh</h2>
              <p className="text-brand-brown-600">Direct sourcing ensures the highest quality and freshness.</p>
            </div>
            <div className="bg-brand-cream rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-4">Artisanal Process</h2>
              <p className="text-brand-brown-600">Traditional methods preserve the authentic taste of each spice.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
