import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="p-4 ">
        <h1 className=" sm:text-2xl text-green-700 font-custom">
          <a
            href="https://github.com/SwethaDSalvatore/cyberdude-challenges/tree/main/javascript/reactJS"
            target="blank"
          >
            Chat-Kadai
          </a>
        </h1>
        <div className="flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="fill-current w-4"
          >
            <path
              fill="currentColor"
              d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
            ></path>
          </svg>
          <p className="text-sm">Periyar nagar, Chennai</p>
        </div>
      </section>
    </>
  );
};

export default Navbar;
