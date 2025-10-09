import { createContext } from "react";

export const NotesContext = createContext({
  notes: [],
  handleDelete: () => {},
  handleEdit: () => {},
});
