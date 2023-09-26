import { useState } from "react";

function TODO() {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState([]);

    const addNote = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setNotes([
            ...notes,
            {title}
        ])
        setTitle("");
    }

    return (
      <div>
        <h1>
          TODO app
        </h1>
        {notes.map((note) => (
            <div key={note.title}>
                <h3>{note.title} </h3>
            </div>
        ))}
        <form action="" onSubmit={addNote} >
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button>Add Note</button>
            <h3>{title} </h3>
        </form>
      </div>
    )
}

export default TODO