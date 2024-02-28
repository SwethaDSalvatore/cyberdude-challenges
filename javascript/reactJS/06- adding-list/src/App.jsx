import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [nextId, setNextId] = useState(4); // Start with the next available id
  const [notes, setNotes] = useState([
    {
      id: 1,
      value:
        "npm create vite@latest; Vanilla; JavaScript; npm install; npm run dev; npm install -D tailwindcss postcss autoprefixer; npx tailwindcss init -p",
    },
    {
      id: 2,
      value: "@tailwind base; @tailwind components; @tailwind utilities;",
    },
    {
      id: 3,
      value: "vite build --base=./",
    },
  ]);

  function addEvent(newValue) {
    setNotes([
      ...notes,
      {
        id: nextId,
        value: newValue,
      },
    ]);
    setNextId((prevId) => prevId + 1); // Increment nextId for the next note
  }

  function deleteEvent(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  return (
    <div>
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
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addEvent(value);
                  setValue("");
                }
              }}
            />
            <button
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-4 py-2 rounded-r font-bold"
              onClick={() => {
                addEvent(value);
                setValue("");
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="">
          <ul className="bg-zinc-700 shadow p-4 ">
            {notes.map((note) => (
              <li
                key={note.id}
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
      <div>
        <p className="text-center text-yellow-400 mt-60">
          Designed by{" "}
          <a href="https://swethadsalvatore.github.io/" class="text-white font-semibold hover:underline" target="blank">
            Swetha Ramesh{" "}
          </a>{" "}
          for CyberDude Networks Internship programme
        </p>
      </div>
    </div>
  );
};

export default App;
