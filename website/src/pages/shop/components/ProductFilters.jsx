import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductFilters = () => {
  const navigate = useNavigate();
  const [cuisineFilters, setCuisineFilters] = useState({
    indian: false,
    mexican: false,
    italian: true,
    thai: false,
    mediterranean: false
  });

  const [grindType, setGrindType] = useState('ground');

  const [organicOnly, setOrganicOnly] = useState(false);

  const handleCuisineChange = (cuisine) => {
    setCuisineFilters(prev => ({
      ...prev,
      [cuisine]: !prev[cuisine]
    }));
  };

  const handleGrindTypeChange = (type) => {
    setGrindType(type);
  };

  const handleOrganicChange = () => {
    setOrganicOnly(!organicOnly);
  };

  // Navigate to category page
  const handleCategoryClick = (category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${categorySlug}`);
  };

  return (
    <aside id="filters-sidebar" className="w-full lg:w-1/4 xl:w-1/5">
      <div className="space-y-8">
        <h2 className="text-2xl font-serif font-bold border-b pb-3 border-brand-tan">Filters</h2>

        {/* Category Filter */}
        <div id="filter-category" className="space-y-3">
          <h3 className="font-bold text-lg">Category</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <button 
                onClick={() => handleCategoryClick('All Spices')} 
                className="text-left hover:text-brand-rust transition-colors w-full"
              >
                All Spices
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('Herbs')} 
                className="text-left hover:text-brand-rust transition-colors w-full"
              >
                Herbs
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('Spice Blends')} 
                className="text-left hover:text-brand-rust transition-colors w-full"
              >
                Spice Blends
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('Salts & Peppers')} 
                className="text-left hover:text-brand-rust transition-colors w-full"
              >
                Salts & Peppers
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('Chilies')} 
                className="text-left hover:text-brand-rust transition-colors w-full"
              >
                Chilies
              </button>
            </li>
          </ul>
        </div>

        {/* Cuisine Filter */}
        <div id="filter-cuisine" className="space-y-3">
          <h3 className="font-bold text-lg">Cuisine</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-brand-rust focus:ring-brand-rust/50"
                  checked={cuisineFilters.indian}
                  onChange={() => handleCuisineChange('indian')}
                />
                <span>Indian</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-brand-rust focus:ring-brand-rust/50"
                  checked={cuisineFilters.mexican}
                  onChange={() => handleCuisineChange('mexican')}
                />
                <span>Mexican</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-brand-rust focus:ring-brand-rust/50"
                  checked={cuisineFilters.italian}
                  onChange={() => handleCuisineChange('italian')}
                />
                <span>Italian</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-brand-rust focus:ring-brand-rust/50"
                  checked={cuisineFilters.thai}
                  onChange={() => handleCuisineChange('thai')}
                />
                <span>Thai</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-brand-rust focus:ring-brand-rust/50"
                  checked={cuisineFilters.mediterranean}
                  onChange={() => handleCuisineChange('mediterranean')}
                />
                <span>Mediterranean</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Spice Level Filter */}
        <div id="filter-spice-level" className="space-y-3">
          <h3 className="font-bold text-lg">Spice Level</h3>
          <div className="flex space-x-2">
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-brand-green bg-brand-green text-white transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
              </svg>
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-brand-rust transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512">
                <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" />
              </svg>
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-red-500 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grind Type Filter */}
        <div id="filter-grind-type" className="space-y-3">
          <h3 className="font-bold text-lg">Grind Type</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="grind"
                  className="text-brand-rust focus:ring-brand-rust/50"
                  checked={grindType === 'whole'}
                  onChange={() => handleGrindTypeChange('whole')}
                />
                <span>Whole</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="grind" 
                  className="text-brand-rust focus:ring-brand-rust/50"
                  checked={grindType === 'ground'}
                  onChange={() => handleGrindTypeChange('ground')}
                />
                <span>Ground</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="grind"
                  className="text-brand-rust focus:ring-brand-rust/50"
                  checked={grindType === 'flakes'}
                  onChange={() => handleGrindTypeChange('flakes')}
                />
                <span>Flakes</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Organic Filter */}
        <div id="filter-organic" className="space-y-3">
          <label className="flex items-center space-x-2 cursor-pointer text-lg font-bold">
            <input 
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-brand-green focus:ring-brand-green/50"
              checked={organicOnly}
              onChange={handleOrganicChange}
            />
            <span>Organic Only</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;