import React from 'react';

const SourcingStory = () => {
  return (
    <section id="sourcing-story-section" className="py-24 bg-brand-brown-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img 
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/40bf5e166a-3b6d6c7171663055e1c4.png"
                alt="A sun-drenched spice farm in Kerala, India, with rows of cardamom plants and farmers tending to them, vibrant and authentic."
              />
              <div className="absolute top-4 right-4 h-40 w-40 bg-white p-2 rounded-lg shadow-xl -rotate-6 transform">
                <img 
                  className="w-full h-full object-cover rounded-md"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7fee526639-3b2a1c3395bbb5cac100.png"
                  alt="Close-up of a farmer"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl font-bold text-brand-brown-900">
              From Our Farms, To Your Table
            </h2>
            <p className="mt-6 text-lg text-brand-brown-700">
              We partner with generational farmers who cultivate spices using traditional, sustainable methods. Each harvest is hand-picked at its peak, ensuring unparalleled potency and flavor that honors the land and its caretakers.
            </p>
            <ul className="mt-8 space-y-4 text-brand-brown-700">
              <li className="flex items-start">
                <svg className="text-brand-green-700 mt-1 mr-4 w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z" />
                </svg>
                <div>
                  <h4 className="font-bold">Sustainably Grown</h4>
                  <p>No pesticides, no artificial enhancers. Just the pure, unadulterated essence of nature.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="text-brand-green-700 mt-1 mr-4 w-5 h-5" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                </svg>
                <div>
                  <h4 className="font-bold">Fair-Trade Practices</h4>
                  <p>We ensure our farming partners receive equitable pay, fostering community growth and well-being.</p>
                </div>
              </li>
            </ul>
            <a href="#" className="inline-block mt-8 text-brand-green-700 font-bold group">
              <span>Discover Our Origins</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourcingStory;