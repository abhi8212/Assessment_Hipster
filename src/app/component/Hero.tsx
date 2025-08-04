import React from 'react';

const Hero = () => {
  return (
    <div className='relative flex items-center h-screen  bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-10' />
      <div className='flex flex-col text-white ml-10 max-w-xl'>
        <div className='bg-opacity-95 p-5 rounded-lg'>
          <h3 className="text-xl font-bold my-3">Kindori Kindergarten School</h3>
          <h1 className='text-4xl md:text-5xl text-blue-950 mb-3'>A Brighter Future For All</h1>
          <p className='text-lg md:text-xl leading-relaxed font-serif font-medium text-black'>
            The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.
          </p>
          <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-blue-500 rounded-full mt-4">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
