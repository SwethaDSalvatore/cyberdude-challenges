import React from "react";
import TopBookData from "../data/topBook.json";
const TopBooks = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-red-500 font-semibold text-xl mb-5">
          Top 3 Suggesion of this week
        </h1>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 space-y-4">
          {TopBookData.map((Data, index) => (
            <div
              className="max-w-sm rounded-lg shadow bg-black border-black"
              key={index}
            >
              <a href={Data.url}>
                <img className="rounded-t-lg" src={Data.img} alt="" />
              </a>
              <div className="p-5">
                <a href={Data.url}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {Data.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-200">
                  {Data.description}
                </p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-white">
                    {Data.rating}
                  </p>
                  <p className="ms-1 text-sm font-medium text-white">out of</p>
                  <p className="ms-1 text-sm font-medium text-white">5</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default TopBooks;
