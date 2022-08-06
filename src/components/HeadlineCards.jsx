import React from 'react';

const HeadlineCards = () => {
  return (
    <div className="mx-auto grid max-w-[1640px] gap-6 p-4 py-12 md:grid-cols-3">
      {/* card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full rounded-xl bg-black/50 text-white">
          <div className="flex h-full w-full flex-col  justify-between ">
            <p className="mx-auto w-auto py-2 text-3xl font-bold">
              Brunch 4 ur wife
            </p>
            <p className="mx-auto w-auto px-2 text-2xl">Through 8/26</p>
            <button className=" m-6 mx-auto w-auto bg-white text-black">
              Order Now
            </button>
          </div>
        </div>
        <img
          className="max-h-[160px] w-full max-w-max rounded-xl object-cover md:max-h-[200px]"
          src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg"
          alt="/"
        />
      </div>
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full rounded-xl bg-black/50 text-white">
          <div className="flex h-full w-full flex-col  justify-between ">
            <p className="mx-auto w-auto py-2 text-3xl font-bold">
              Generic Suchi at Mty
            </p>
            <p className="mx-auto w-auto px-2 text-2xl">Through 8/26</p>
            <button className=" m-6 mx-auto w-auto bg-white text-black">
              Order Now
            </button>
          </div>
        </div>
        <img
          className="max-h-[160px] w-full max-w-max  rounded-xl object-cover md:max-h-[200px]"
          src="https://images.pexels.com/photos/3147493/pexels-photo-3147493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full rounded-xl bg-black/50 text-white">
          <div className="flex h-full w-full flex-col  justify-between ">
            <p className="mx-auto w-auto py-2 text-3xl font-bold">
              OverPriced Instagram Sanwich
            </p>
            <p className="mx-auto w-auto px-2 text-2xl">Through 8/26</p>
            <button className=" m-6 mx-auto w-auto bg-white text-black">
              Order Now
            </button>
          </div>
        </div>
        <img
          className="max-h-[160px] w-full max-w-max rounded-xl object-cover md:max-h-[200px]"
          src="https://images.pexels.com/photos/6529599/pexels-photo-6529599.jpeg"
          alt="/"
        />
      </div>

      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full max-w-[500px] rounded-xl bg-black/50 text-white">
          <p className="pt-4 text-2xl font-bold">Fresh Sanwiches at lorems</p>
          <p className="px-2">Through 8/26</p>
          <button className="text-balck buttom-4 absolute mx-2 border-white bg-white text-black"></button>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
