import React, { useEffect, useState } from "react";
import InternsCard from "./components/InternsCard";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchResult = await fetch("/api");
      const internsData = await fetchResult.json();
      setData(internsData);
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <header className="bg-slate-200 mx-auto p-4 container rounded m-5 ">
        <h1 className="text-xl font-semibold text-center">
          CyberDude Live Internship Team List
        </h1>
        {data.length === 0 ? (
          <div className="text-xl font-semibold text-center text-red-400">
            No Data Available Right Now{" "}
          </div>
        ) : (
          ""
        )}
      </header>
      <div className="sm:grid sm:grid-cols-4 m-4 space-y-4 sm:space-y-0 sm:gap-4">
        {data.map((details) => {
          return (
            <InternsCard
              key={details.id}
              name={details.name}
              designation={details.designation}
              role={details.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
