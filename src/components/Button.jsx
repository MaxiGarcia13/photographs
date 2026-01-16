import { useState } from 'react';

export default function Button({ children }) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      className={`px-6 py-3 rounded-lg text-white border-none cursor-pointer text-base font-medium transition-colors duration-200 ${clicked ? 'bg-emerald-500' : 'bg-blue-500'
        }`}
    >
      {clicked ? 'Clicked!' : children}
    </button>
  );
}
