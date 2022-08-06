import React, { useState } from 'react';
import { data } from '../data/data';
const Food = () => {
  const [foods, setFoods] = useState(data);

  //filter type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="m-auto max-w-[1640px] px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-orange-600">
        Top Rated Menu items
      </h1>
      {/* filter row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter By Type</p>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('salad')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType('pizza')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizzas
            </button>
            <button
              onClick={() => filterType('chicken')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div className="font-bold text-gray-700">
          <p>Filter By Price</p>
          <div className="flex w-full max-w-[390px] justify-between ">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$$
            </button>
          </div>
        </div>
      </div>

      {/* display foods */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border shadow-lg duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-[200px] w-full rounded-t-lg object-cover"
            />
            <div className="flex justify-between py-4 px-2">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="rounded-full bg-orange-500 p-1 text-white">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Food;
