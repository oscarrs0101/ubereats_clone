import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div className="mx-auto flex max-w-[1640px] items-center justify-between p-4">
      {' '}
      {/* {lado izquierdo} */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" px-2 text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats </span>
        </h1>
        <div className="hidden items-center rounded-full bg-gray-200 p-1 text-[14px] lg:flex ">
          <p className="rounded-full bg-black p-2 text-white">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>
      {/* search input */}
      <div className="flex w-[200px] items-center rounded-full bg-gray-200 px-2 sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search Food"
        />
      </div>
      {/* cart button */}
      <button className="hidden items-center  bg-black py-2 text-white md:flex ">
        <BsFillCartFill size={20} className="mr-2 rounded-full" />
      </button>
    </div>
  );
};

export default Navbar;
