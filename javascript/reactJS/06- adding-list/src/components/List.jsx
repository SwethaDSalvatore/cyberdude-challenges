import React, { useState } from "react";

const List = ({ stickyNote, addEvent, deleteEvent }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="max-w-xl mx-auto m-4 rounded-lg bg-zinc-700">
        <div className="p-4 sm:flex items-center justify-between">
          <h1 className="text-yellow-400 capitalize text-xl font-semibold">
            <a
              href="https://github.com/SwethaDSalvatore/cyberdude-challenges/tree/main/javascript/reactJS"
              target="blank"
            >
              Quick Sticky Note
            </a>
          </h1>
          <div className="flex items-center text-center justify-center">
            <input
              className="bg-zinc-800 outline-none text-white capitalize px-4 py-2 rounded-l"
              type="text"
              placeholder="New Note"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-4 py-2 rounded-r font-bold"
              onClick={() => {
                addEvent(value); // Pass 'value' state to addEvent
                setValue(""); // Clear input after adding
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="">
          <ul className="bg-zinc-700 shadow p-4 ">
            {stickyNote.map((note, index) => (
              <li
                key={index} // Added key prop for optimization
                className="flex justify-between  p-2 items-center border-t border-yellow-400 m-2 bg-zinc-800 shadow rounded"
              >
                <h1 className="text-white capitalize">{note.value}</h1>
                <button className="" onClick={() => deleteEvent(note.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="fill-current text-yellow-600 hover:text-yellow-500 w-7 h-7"
                  >
                    <path d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
