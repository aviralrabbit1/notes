import { useState } from "react";

function TODO() {
    const [title, setTitle] = useState("");

    const addNote = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }

    return (
      <div>
        <h1>
          TODO app
        </h1>
        <h3>Add Notes here</h3>
        <form action="" onSubmit={addNote} >
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button>Add Note</button>
        </form>
      </div>
    )
}

export default TODO