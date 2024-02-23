import React from "react";

const Category = () => {
  const Categories = [
    "Art",
    "Photography",
    "Food",
    "Romance",
    "Health",
    "Biography",
    "Comic",
    "Fantasy",
    "Science Fiction",
    "Devotion",
    "Mystery/Thriller",
    "History",
    "Horror",
    "LGBTQ+"
  ];

  return (
    <div>
      <div className=" p-4 bg-slate-200">
      <div className="container mx-auto p-4">
      <h1 className="sm:text-2xl text-xl font-semibold text-red-500 sm:mb-10 mb-5">
              Categories
            </h1>
        <div className="sm:grid sm:grid-cols-2 gap-4 items-center">
          <img
            className="rounded-lg shadow"
            src="https://i.pinimg.com/564x/8f/89/a0/8f89a07571bd1012e2c13e108fe6ca48.jpg"
            alt="library-pic"
          />
          <div className="pl-5">
            
            <div className=" space-y-2">
              {Categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start text-center space-x-10"
                >
                  <svg
                    className="sm:w-6 sm:h-6 w-4 h-4 text-red-500 hover:text-red-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 10 16"
                  >
                    <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                  </svg>
                  <h1 className="sm:text-xl hover:underline cursor-pointer">{category}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Category;
