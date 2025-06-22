import React, { useState, useEffect, useRef } from "react";

const Sign_up = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  const handleClickOutside = (event) => {
    // If clicked outside the entire wrapper (button + box), close it
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-10 w-[200px]">
      {/* Wrapper includes both button and box */}
      <div ref={boxRef}>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => setOpen(!open)}
        >
          Toggle Box
        </button>

        {open && (
          <div className="w-64 p-4 mt-4 bg-white border rounded shadow">
            This is the toggle-able box. Click outside to close it.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sign_up;
