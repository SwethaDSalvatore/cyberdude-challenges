import React, { useState } from "react";
import List from "./components/List";

const App = () => {
  let nextId = 4; // Start with the next available id
  const stickyNote = [
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
  ];

  const [notes, setNotes] = useState(stickyNote);

  function handleAdd(newValue) {
    setNotes([
      ...notes,
      {
        id: nextId++,
        value: newValue,
      },
    ]);
  }

  function deleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  return (
    <div>
      <List stickyNote={notes} addEvent={handleAdd} deleteEvent={deleteNote} />
    </div>
  );
};

export default App;
