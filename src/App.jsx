import React, { useRef } from "react";

function App() {
  const ref = useRef(null);

  const toggle = () => {
    ref.current.classList.toggle("down");
    ref.current.classList.toggle("up");
  };

  return (
    <div ref={ref} className="down">
      <div className="h-screen bg-transparent w-full first flex items-between">
        <h1>Dissapear</h1>
        <button onClick={toggle}> More</button>
      </div>
      <div className="h-80 bg-slate-600 second">
        <h1>Appear</h1>
      </div>
    </div>
  );
}

export default App;
