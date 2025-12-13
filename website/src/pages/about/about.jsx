import React from 'react';

const About = () => {
  return (
    <div className="bg-brand-cream font-sans text-brand-brown-700">
      {/* Hero Section */}
      <section id="hero-about" className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="w-full h-full">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8f25e12c82-8a3f09e89c9f5b05dd0d.png" 
            alt="Lush green spice farm at sunrise, warm morning light filtering through leaves, cinematic style, high detail photography" 
          />
        </div>
        <div className="relative z-20 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">From Earth to Table, Honestly.</h1>
          <p className="text-lg md:text-xl text-brand-brown-100">This is the story of our journey to bring you flavors that are pure, potent, and grown with purpose.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cbed53d067-7059712bc1e54d284074.png" 
                alt="Portrait of a smiling female farmer holding a basket of fresh turmeric roots, authentic and natural lighting, wearing traditional clothing" 
              />
            </div>
            <div id="mission-content">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Mission</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Connecting You to the Source</h3>
              <p className="text-brand-brown-700 text-lg mb-4 leading-relaxed">
                We started Terra Spice with a simple idea: flavor shouldn't be a mystery. Our mission is to bridge the gap between the dedicated farmers who cultivate the world's finest spices and the home cooks who use them to create memories.
              </p>
              <p className="text-brand-brown-700 text-lg leading-relaxed">
                We believe in transparency, fairness, and the unparalleled quality that comes from a direct connection to the land. Every jar we sell is a testament to this partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Quality Section */}
      <section id="sourcing-quality" className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-green mb-4">A Commitment to Purity</h3>
            <p className="text-brand-brown-700 text-lg leading-relaxed">
              From the soil to your kitchen, our process is guided by a deep respect for our ingredients and the people who grow them. We don't just sell spices; we curate them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div id="sourcing-card-1" className="text-center group">
              <div className="h-80 overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5034304c82-e552b7f45ba154c92714.png" 
                  alt="Close-up shot of hands sorting vibrant red chili peppers on a rustic wooden table, shallow depth of field, natural light" 
                />
              </div>
              <h4 className="text-2xl font-serif text-brand-green mb-2">Ethical Sourcing</h4>
              <p className="text-brand-brown-700">We partner directly with small-scale farms, ensuring fair wages and sustainable practices that honor both people and the planet.</p>
            </div>
            <div id="sourcing-card-2" className="text-center group">
              <div className="h-80 overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4edc2aba48-691fcbe60b2e5c797141.png" 
                  alt="A farmer tending to cinnamon trees on a lush plantation, soft sunlight filtering through the leaves, atmospheric" 
                />
              </div>
              <h4 className="text-2xl font-serif text-brand-green mb-2">Peak Freshness</h4>
              <p className="text-brand-brown-700">Our spices are harvested at their peak and processed in small batches to preserve their natural oils, aroma, and potency.</p>
            </div>
            <div id="sourcing-card-3" className="text-center group">
              <div className="h-80 overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/126c05a942-b5ba42fd425a7acc452c.png" 
                  alt="Overhead shot of various colorful whole spices like star anise, cloves, and cardamom arranged on a dark slate background" 
                />
              </div>
              <h4 className="text-2xl font-serif text-brand-green mb-2">Uncompromising Quality</h4>
              <p className="text-brand-brown-700">We rigorously test for purity and quality, ensuring that what you receive is 100% natural, free of fillers or artificial additives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Ethos Section */}
      <section id="founder-ethos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-brand-cream p-12 rounded-lg shadow-lg">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ffb6112e78-e22146180749199a9205.png" 
                alt="Warm, friendly portrait of a middle-aged female founder in a sunlit kitchen, natural smile, soft focus background with spice jars" 
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-serif text-brand-brown-700 italic leading-relaxed">
                "My grandmother taught me that a meal is more than just food—it's a story. The story of our spices begins with the earth, is nurtured by dedicated hands, and ends in your kitchen. We're just honored to be the storytellers."
              </p>
              <div className="mt-6">
                <p className="font-bold text-lg text-brand-green">Elara Vance</p>
                <p className="text-brand-brown-700">Founder, Terra Spice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-brand-green text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Vision</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">A Future of Flavor</h3>
          <p className="text-lg text-brand-brown-100 leading-relaxed">
            We envision a world where every meal is an adventure, where cooks are empowered by pure ingredients, and where the connection between our food and its origins is celebrated. We're committed to growing this community, one spice at a time, fostering a more flavorful and conscious way of living.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;