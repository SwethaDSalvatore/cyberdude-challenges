import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import TopBooks from "../components/TopBooks";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <TopBooks />
      <div className="container mx-auto p-4 space-y-4">
        <h1 className="text-xl text-red-500 font-semibold">
          Which one do you suggest ?
        </h1>
        <div className="space-y-4">
          <div className="flex items-center ps-4 border border-gray-200 rounded bg-red-500 hover:bg-red-600">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              for="bordered-radio-1"
              className="w-full py-4 ms-2 text-sm font-medium text-white"
            >
              The Lord of the Rings by J.R.R. Tolkien
            </label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded bg-red-500 hover:bg-red-600">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              for="bordered-radio-2"
              className="w-full py-4 ms-2 text-sm font-medium text-white"
            >
              Harry Potter and the Philosopher’s Stone by J.K. Rowling
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
