import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class=" rounded-lg shadow m-4 bg-red-500">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm  sm:text-center text-white">
            © 2024{" "}
            <a href="https://github.com/SwethaDSalvatore/" class="hover:underline">
              Swetha Ramesh
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  text-white sm:mt-0">
            <li>
              <Link to={"/book-bank"} class="hover:underline me-4 md:me-6">
                Donate
              </Link>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="https://github.com/SwethaDSalvatore/cyberdude-challenges/tree/main/javascript/reactJS" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
