import { useEffect, useReducer, useState } from "react";

interface Note {
    title: string;
    body: string;
}

type NotesAction =
    | { type: 'POPULATE_NOTES'; notes: Note[] }

    const notesReducer = (state: Note[], action: NotesAction): Note[] => {
        switch (action.type) {
        case 'POPULATE_NOTES':
            return action.notes            
            break;
    
        default:
            return state;
    }
}

function TODO() {
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
        setCount(count+1);
        setTitle("");
        setBody("");
    }
    
    const removeNote = (title: string) => {
        // setNotes(notes.filter((note) => note.title !== title));
        if(count>0) setCount(count-1);
    }

    return (
      <div>
        <h1>
          TODO app
        </h1>
        {notes.map((note: Note, index: number) => (
            <Note key={index} note={note} removeNote={removeNote} />
        ))}
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

const Note: React.FC<{ note: Note; removeNote: (title: string) => void }> = ({ note, removeNote }) => {
    return (
        <div>
            <h3>{note.title} </h3>
            <p>{note.body} </p>
            <button onClick={() => removeNote(note.title)}>Remove Note</button>
        </div>
    )
}

export default TODO