import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const featuredItems = [
  {
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop&crop=center',
    title: 'Top Pants Series',
    position: 'large'
  },
  {
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=600&fit=crop&crop=center',
    title: 'Top Shirt Series',
    position: 'small'
  },
  {
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=800&fit=crop&crop=center',
    title: 'Full Set Series',
    position: 'center'
  },
  {
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=600&fit=crop&crop=center',
    title: 'Winter Collection Series',
    position: 'large'
  },
  {
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=600&fit=crop&crop=center',
    title: 'Top Pants Series',
    position: 'small'
  },
];

const FeaturedCollection = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-black text-5xl font-semibold mb-2">Our Featured Collections</h1>
        <h2 className="text-gray-500 text-xl">Recently added items</h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[800px]">
          {/* Top Pants Series - Top Left */}
          <div className="col-span-6 row-span-4 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <img 
              src={featuredItems[0].image} 
              alt={featuredItems[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">{featuredItems[0].title}</h3>
            </div>
            <div className="absolute bottom-6 right-6 text-white bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>

          {/* Winter Collection Series - Top Right */}
          <div className="col-span-6 row-span-4 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <img 
              src={featuredItems[3].image} 
              alt={featuredItems[3].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">{featuredItems[3].title}</h3>
            </div>
            <div className="absolute bottom-6 right-6 text-white bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>

          {/* Top Shirt Series - Bottom Left */}
          <div className="col-span-3 row-span-4 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <img 
              src={featuredItems[1].image} 
              alt={featuredItems[1].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{featuredItems[1].title}</h3>
            </div>
            <div className="absolute bottom-6 right-6 text-white bg-white bg-opacity-20 backdrop-blur-sm p-2.5 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Full Set Series - Bottom Center */}
          <div className="col-span-6 row-span-4 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <img 
              src={featuredItems[2].image} 
              alt={featuredItems[2].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">{featuredItems[2].title}</h3>
            </div>
            <div className="absolute bottom-6 right-6 text-white bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>

          {/* Top Pants Series - Bottom Right */}
          <div className="col-span-3 row-span-4 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <img 
              src={featuredItems[4].image} 
              alt={featuredItems[4].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{featuredItems[4].title}</h3>
            </div>
            <div className="absolute bottom-6 right-6 text-white bg-white bg-opacity-20 backdrop-blur-sm p-2.5 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;