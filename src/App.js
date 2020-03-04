import React from "react";
import "./App.css";
import Visualization from "./components/Visualization";

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-900">
        <div className="relative text-gray-800 rounded-b bg-white py-12 z-10 sm:py-12">
          <h1 className="text-center text-4xl font-light">
            <span className="text-gray-500 text-3xl">
              Exploratory Data Analysis
            </span>
            <span className="ml-2 text-indigo-700 block tracking-wide">
              Barcelona
            </span>
          </h1>
          <h1 className="text-md my-4 text-center text-gray-600">Louis Pham</h1>
        </div>
        <div className="mt-4 bg-indigo-100 rounded p-12 relative z-0">
          <h1 className="text-xl text-indigo-500 mb-2 tracking-wide font-bold">
            Dataset
          </h1>
          <h1 className="">
            The data is available online:
            <span>
              <a
                href="https://google.com"
                target="_blank"
                className="text-indigo-900 ml-2 hover:text-indigo-300 underline"
              >
                Barcelona Dataset
              </a>
            </span>
            <p>
              This is an open dataset from Open Data BCN portal project. The
              project started in 2010. The data was from kaggle and it has
              information of Barcelona's districts. This includes birth, deaths,
              population, unemployment, immigrants_emigrants, life_expectancy.
            </p>
          </h1>
        </div>
        <div className="mt-4 bg-indigo-100 rounded p-12">
          <h1 className="text-xl text-indigo-600 mb-2 tracking-wide font-bold">
            Initial Analysis Questions
          </h1>
          <ul className="leading-8">
            <li>1: What district in Barcelona has the most accidents?</li>
            <li>2: During what months accidents occur the most?</li>
            <li>3: Where in Barcelona has the best air quality?</li>
            <li>4: Which district uses the most buses for traveling?</li>
            <li>5: What age group has the highest death rate?</li>
            <li>
              6: What neighborhood has the highest life expectancy for male?
            </li>
            <li>
              7: How do people travel around between districts in Barcelona?
            </li>
            <li>8: What nationality are the immigrants coming to Barcelona?</li>
            <li>
              9: Number of immigrants coming to Barcelona sorted by years?
            </li>
            <li>10: Which district has the least amount of unemployment?</li>
          </ul>
        </div>
        <div className="mt-4 bg-indigo-100 rounded-t-md pt-12 md:p-16">
          <h1 className="text-xl font-bold text-indigo-600 ml-8 sm:ml-0">
            Discovery & Insight
          </h1>

          <Visualization />
        </div>
      </div>
      <span className="text-sm text-center block text-gray-600 p-12 mt-2">
        Copy right &amp;&amp; !
      </span>
    </div>
  );
}

export default App;
