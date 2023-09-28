import { useEffect, useReducer, useState } from "react";
import { notesReducer } from "../reducers/notesReducer";
import { NoteList } from "./NoteList";

export default function NotesApp() {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState("");
    const [count, setCount] = useState(0);

    const [notes, dispatch] = useReducer(notesReducer, []);

    const notesDataString = localStorage.getItem('notes'); // may return null
    // const notesData = notesDataString ? JSON.parse(notesDataString) : [];

    useEffect(() => {
        const notesData = notesDataString ? JSON.parse(notesDataString) : [];
        
        if(notesData){
            dispatch({ type: 'POPULATE_NOTES', notes: notesData });
        }
    }, [])


    // const [notes, setNotes] = useState<Note[]>(notesData || []); // localstorage or empty
    
    useEffect(() => {
      document.title = (count>0)?`${count} note(s)`:'TODO app';
      // Changing the title to denote the number of notes

      localStorage.setItem('notes', JSON.stringify(notes));
      console.log(notes);
      
    }, [count, notes])
    

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
    
    const removeNote = (title: string) => {
        // setNotes(notes.filter((note) => note.title !== title));
        dispatch({
            type: 'REMOVE_NOTES',
            title,
        })
        if(count>0) setCount(count-1);
    }

    return (
      <div>
        <h1>
          Notes app
        </h1>
        <NoteList notes={notes} removeNote={removeNote} />
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
