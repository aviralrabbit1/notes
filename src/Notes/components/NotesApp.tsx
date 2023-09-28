import { useEffect, useReducer, useState } from "react";
import { notesReducer } from "../reducers/notesReducer";
import { NoteList } from "./NoteList";
import { AddNote } from './AddNote'
import NotesContext from '../context/notes-context'

export default function NotesApp() {

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
    
    const removeNote = (title: string) => {
        // setNotes(notes.filter((note) => note.title !== title));
        dispatch({
            type: 'REMOVE_NOTES',
            title,
        })
        if(count>0) setCount(count-1);
    }

    return (
      <NotesContext.Provider value={{ notes, dispatch}} >   {/* providing context value to all the children components */}
        <h1>
          Notes app
        </h1>
        <NoteList removeNote={removeNote} />
        <AddNote dispatch={dispatch} />
      </NotesContext.Provider>
    )
}
