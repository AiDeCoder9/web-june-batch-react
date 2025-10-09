import { useContext } from "react";
import { NotesContext } from "../../notecontext";

export default function NoteItem(props) {
  const notesContext = useContext(NotesContext);
  const { note } = props;
  const { handleDelete } = notesContext;

  return (
    <div className="shadow-xl mb-6 p-6 border border-gray-400 rounded-md w-full">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button
        onClick={() => handleDelete(note.id)}
        className="bg-red-400 px-4 py-2 rounded-md text-white"
      >
        Delete
      </button>
    </div>
  );
}
