import { useState } from "react";

export default function Button({ children }) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: clicked ? "#10b981" : "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "500",
        transition: "background-color 0.2s",
      }}
    >
      {clicked ? "Clicked!" : children}
    </button>
  );
}
