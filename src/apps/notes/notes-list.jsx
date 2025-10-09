import { useContext } from "react";
import NoteItem from "./note-item";
import { NotesContext } from "../../notecontext";

export default function NotesList() {
  const notesContext = useContext(NotesContext);
  const { notes } = notesContext;

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
