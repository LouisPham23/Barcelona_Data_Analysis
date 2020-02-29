import React from "react";
import "../App.css";
import data from "../data";

const Visualization = () => {
  return (
    <div className="">
      {data.map(item => (
        <div
          className="bg-white rounded p-4 flex flex-col mt-6 shadow md:shadow-sm md:mt-12 hover:shadow-lg transition duration-500 ease-in-out bg-indigo-300 hover:bg-indigo-500 transform hover:-translate-y-1 hover:text-gray-900 border-l-8 border-blue-900 hover:border-white h-128"
          key={item.id}
        >
          <img src={item.img} alt={item.alt} className="rounded-lg" />
          <div className="p-6 bg-white mt-4 rounded sm:p-2 md:p-8">
            <h1 className="text-gray-800 mt-2 text-xl text-sm sm:text-sm md:text-2xl">
              About Visualization:
            </h1>
            <h1 className="text-gray-700 text sm:text-sm md:text-xl">
              {item.des}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Visualization;
