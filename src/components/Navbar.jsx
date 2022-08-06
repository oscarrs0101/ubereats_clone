import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillTag } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { useState } from 'react';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="mx-auto flex max-w-[1640px] items-center justify-between p-4">
      {' '}
      {/* {lado izquierdo} */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
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
      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="fixed left-0 top-0 h-screen w-full bg-black/80"></div>
      ) : (
        ''
      )}
      {/* side menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 z-10 h-screen w-[300px] bg-white duration-300'
            : 'fixed top-0 left-[-100%] z-10 h-screen w-[300px] bg-white duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 cursor-pointer"
        />
        <h2 className="p-4 text-2xl">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex py-4 text-xl">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="flex py-4 text-xl">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex py-4 text-xl">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex py-4 text-xl">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex py-4 text-xl">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex py-4 text-xl">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>{' '}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
