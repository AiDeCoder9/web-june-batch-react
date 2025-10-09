import Notes from "./apps/notes/notes";
import Counter from "./apps/counter";
import { useState } from "react";
import { NotesContext } from "./notecontext";

//first step is always to create context

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      description: "This is my first note",
    },
    {
      id: 2,
      title: "Second Note",
      description: "This is my second note",
    },
    {
      id: 3,
      title: "Third Note",
      description: "This is my third note",
    },
  ]);

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const handleEdit = () => {};
  return (
    <NotesContext.Provider value={{ notes, handleDelete, handleEdit }}>
      {children}
    </NotesContext.Provider>
  );
}

export default function App() {
  return (
    <NotesProvider>
      <>
        <Notes />
        <Counter />
      </>
    </NotesProvider>
  );
}
