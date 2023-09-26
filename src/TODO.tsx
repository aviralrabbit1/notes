import { useState } from "react";

function TODO() {
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

export default TODO