import { useState } from "react";

interface Note {
    title: string;
    body: string;
}

function TODO() {
    const [title, setTitle] = useState<string>("");
    const [notes, setNotes] = useState<Note[]>([]);
    const [body, setBody] = useState("");

    const addNote = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle("");
        setBody("");
    }

    const removeNote = (title: string) => {
        setNotes(notes.filter((note) => note.title !== title));
    }

    return (
      <div>
        <h1>
          TODO app
        </h1>
        {notes.map((note) => (
            <div key={note.title}>
                <h3>{note.title} </h3>
                <p>{note.body} </p>
                <button onClick={() => removeNote(note.title)}>Remove Note</button>
            </div>
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

export default TODO