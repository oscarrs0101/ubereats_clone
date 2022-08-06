import React from 'react';

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1640px] p-4">
      <div className="relative max-h-[500px]">
        {/* overlay */}
        <div className="absolute flex h-full max-h-[500px] w-full flex-col justify-center bg-black/40 text-gray-200 ">
          <h1 className="sm:text-5lx px-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            The <span className="text-orage-500">Best </span>
          </h1>
          <h1 className="sm:text-5lx px-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Foods <span className="text-orage-500">Delivered </span>
          </h1>
        </div>
        <img
          className="max-h-[500px] w-full object-cover"
          src="https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="burgerzss"
        />
      </div>
    </div>
  );
};

export default Hero;
