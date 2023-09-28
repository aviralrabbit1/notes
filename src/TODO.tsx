import { useEffect, useState } from "react";

interface Note {
    title: string;
    body: string;
}

function TODO() {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState("");
    const [count, setCount] = useState(0);

    const notesDataString = localStorage.getItem('notes'); // may return null
    const notesData = notesDataString ? JSON.parse(notesDataString) : [];

    const [notes, setNotes] = useState<Note[]>(notesData || []); // localstorage or empty
    
    useEffect(() => {
      document.title = (count>0)?`${count} note(s)`:'TODO app';
      // Changing the title to denote the number of notes

      localStorage.setItem('notes', JSON.stringify(notes));
      console.log(notes);
      
    }, [count, notes])
    

    const addNote = (event: React.FormEvent) => {
        event.preventDefault();
        setNotes([
            ...notes,
            { title, body }
        ])
        setCount(count+1);
        setTitle("");
        setBody("");
    }
    
    const removeNote = (title: string) => {
        setNotes(notes.filter((note) => note.title !== title));
        if(count>0) setCount(count-1);
    }

    return (
      <div>
        <h1>
          TODO app
        </h1>
        {notes.map((note) => (
            <Note key={note.title} note={note} removeNote={removeNote} />
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