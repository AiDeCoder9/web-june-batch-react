import { useState } from "react";
import NotesList from "./notes-list";

export default function Notes() {
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
    <NotesList
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      notes={notes}
    />
  );
}
