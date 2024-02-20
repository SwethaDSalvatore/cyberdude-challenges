import React from "react";

const InternsCard = ({ name, designation, role }) => {
  return (
    <div>
      <main className="">
        <div className="block max-w-sm p-6 bg-slate-400 border border-slate-200 rounded-lg shadow hover:bg-slate-200  text-center text-slate-950">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h1>{`${designation} ( ${role} )`}</h1>
        </div>
      </main>
    </div>
  );
};

export default InternsCard;
