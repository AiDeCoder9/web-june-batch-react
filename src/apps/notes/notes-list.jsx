import NoteItem from "./note-item";

export default function NotesList(props) {
  const { notes, handleEdit, handleDelete } = props;

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}
