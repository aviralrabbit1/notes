import { useContext } from "react";
import { Note } from "../reducers/notesReducer";
import NotesContext from "../context/notes-context";

// const OneNote: React.FC<{ note: Note; removeNote: (title: string) => void }> = ({ note, removeNote }) => {
const OneNote: React.FC<{ note: Note }> = ({ note }) => {
    const { dispatch } = useContext(NotesContext);
    
    return (
        <div>
            <h3>{note.title} </h3>
            <p>{note.body} </p>
            <button onClick={() => dispatch({ type: 'REMOVE_NOTES', title: note.title})}>Remove Note</button>
        </div>
    )
}

export { OneNote as default }
