import React from "react";
import Data from "./components/Data";

const App = () => {
  const menu = [
    {
      id: 1,
      item: "Samosa",
      price: 20,
    },
    {
      id: 2,
      item: "Pani puri",
      price: 50,
    },
    {
      id: 3,
      item: "Dhai puri",
      price: 70,
    },
    {
      id: 4,
      item: "Jelabi",
      price: 50,
    },
    {
      id: 5,
      item: "Kachori",
      price: 50,
    },
    {
      id: 6,
      item: "Channa masala",
      price: 50,
    },
    {
      id: 7,
      item: "Sweet samosa",
      price: 25,
    },
  ];

  return (
    <div>
      <section className="pl-4 pr-4">
        <div>
          <Data menu={menu} />
        </div>
      </section>
      <footer>
      <div>
        <p className="text-center text-green-800 mt-60">
          Designed by{" "}
          <a href="https://swethadsalvatore.github.io/" class="text-black font-semibold hover:underline" target="blank">
            Swetha Ramesh{" "}
          </a>{" "}
          for CyberDude Networks Internship programme
        </p>
      </div>
      </footer>
    </div>
  );
};

export default App;
