import React, { useState } from "react";

function App() {
  const [limit, setLimit] = useState(10); // default limit
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Natural Numbers Generator</h1>

      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        min="1"
        placeholder="Enter a limit"
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <h2>Natural Numbers up to {limit}:</h2>
      <p>{numbers.join(", ")}</p>
    </div>
  );
}

export default App;
