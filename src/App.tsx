import { useState } from 'react';
import './App.css'

function App() {
  const [text, settext] = useState("");
  return (
    <div>
      <h1>
        TODO app
      </h1>
      <input type="text" onChange={(e) => settext(e.target.value)} />
      <p>{text} </p>
    </div>
  )
}

export default App
