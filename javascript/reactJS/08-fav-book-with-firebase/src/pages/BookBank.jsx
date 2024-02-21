import React from "react";
import Header from "../components/Header";
import BookBankHome from "../components/BookBankHome";

const BookBank = () => {
  return (
    <div>
      <Header />
      <BookBankHome />
      <div className="sm:flex justify-between items-center p-4">
        <img
          src="https://i.pinimg.com/564x/56/ea/63/56ea63c69bda998e951be5848dcbba78.jpg"
          alt=""
        />
        <div className="space-y-4 ">
          <h1 className="sm:text-2xl font-semibold text-center">
            Welcome To <span className="text-red-500">Bookiee </span>Bank
          </h1>
          <p className="sm:text-2xl text-center">
            A Bank Where You Can Donate And Get Books, We Value Books More.
          </p>
          <div className="p-4 container">
        <form className="max-w-xl mx-auto p-4 bg-red-400 rounded-lg">
          <div className="mb-6">
            <label
              for="full-name"
              className="block mb-2 text-sm font-medium  text-black "
            >
              Book Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 capitalize"
              placeholder="Harry Potter"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="full_name"
              className="block mb-2 text-sm font-medium  text-black"
            >
              Doner Full Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 capitalize"
              placeholder="Swetha Ramesh"
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="phone"
              className="block mb-2 text-sm font-medium  text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
              placeholder="+91-8012345678"
              pattern="+[0-9]{2}-[0-9]{10}"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium  text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
              placeholder="swetha.ramesh@company.com"
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium  text-white"
            >
              I agree with the{" "}
              <a
                href="#"
                className=" hover:underline text-black"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
        </div>
      </div>
    </div>
  );
};

export default BookBank;
