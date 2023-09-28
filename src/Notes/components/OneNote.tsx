import { Note } from "../reducers/notesReducer";

const OneNote: React.FC<{ note: Note; removeNote: (title: string) => void }> = ({ note, removeNote }) => {
    return (
        <div>
            <h3>{note.title} </h3>
            <p>{note.body} </p>
            <button onClick={() => removeNote(note.title)}>Remove Note</button>
        </div>
    )
}

export { OneNote as default }