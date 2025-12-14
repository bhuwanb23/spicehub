import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative bg-brand-brown-100 h-[700px] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-2 gap-2">
        <div className="col-span-2 row-span-2 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/67e878543c-3329319bc2f76cb23bd4.png"
            alt="A close-up photograph of vibrant red paprika and chili powder in artisanal ceramic bowls, earthy and warm tones, natural light."
          />
        </div>
        <div className="col-span-1 row-span-1 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/135d277781-7bec121286ec9f6d535f.png"
            alt="Macro shot of golden turmeric powder with whole turmeric roots nearby, detailed texture, natural aesthetic."
          />
        </div>
        <div className="col-span-2 row-span-1 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b640e6d159-747925f453976ddee0d7.png"
            alt="Artistic arrangement of whole spices like star anise, cinnamon sticks, and cloves on a rustic wooden surface, top-down view."
          />
        </div>
        <div className="col-span-1 row-span-1 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1fb5696aaf-3385dd56f8f687a54481.png"
            alt="Close-up of fresh green herbs like rosemary and thyme, soft focus, natural lighting."
          />
        </div>
        <div className="col-span-2 row-span-1 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/792e3c5ce1-ed4331d17cf288f0b44b.png"
            alt="A pile of aromatic whole black peppercorns, detailed texture, dark and moody photography."
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/95 via-brand-cream/70 to-transparent"></div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="w-full md:w-1/2 lg:w-2/5 py-12">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-brown-900 leading-tight">
            Purity in Every Pinch.
          </h1>
          <p className="mt-6 text-lg text-brand-brown-700 max-w-md">
            Experience the authentic taste of single-origin spices, sourced directly from the finest farms and delivered fresh to your kitchen.
          </p>
          <div className="mt-8">
            <button className="bg-brand-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-green-500 transition-all duration-300 transform hover:scale-105 bg-brand-green-700">
              Shop Now
              <svg className="ml-2 w-4 h-4 inline" fill="currentColor" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
          <div id="trust-badges" className="mt-10 flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <svg className="text-brand-green-500 text-xl w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
              </svg>
              <span className="text-sm font-medium text-brand-brown-700">FSSAI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="text-brand-green-500 text-xl w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                <path d="M0 64C0 46.3 14.3 32 32 32H96h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32V266.8c-20.2 28.6-32 63.5-32 101.2c0 25.2 5.3 49.1 14.8 70.8C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96V96C14.3 96 0 81.7 0 64zM96 96v96h64V96H96zM224 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
              </svg>
              <span className="text-sm font-medium text-brand-brown-700">Lab-Tested Purity</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="text-brand-green-500 text-xl w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
                <path d="M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
              </svg>
              <span className="text-sm font-medium text-brand-brown-700">Ethically Sourced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;