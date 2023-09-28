import React, { useState } from 'react'
import { NotesAction } from '../reducers/notesReducer'

export const AddNote: React.FC<{ dispatch: React.Dispatch<NotesAction> }> = ({ dispatch }) => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState("");
    const [count, setCount] = useState(0);

    const addNote = (event: React.FormEvent) => {
        event.preventDefault();
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ])
        dispatch({
            type: 'ADD_NOTES',
            title,
            body,
        })
        setCount(count+1);
        setTitle("");
        setBody("");
    }
    return (
        <div>
            <p>Add notes here</p>
            <form action="" onSubmit={addNote} >
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button>Add Note</button>
                <h3>{title} </h3>
            </form>
        </div>
    )
}