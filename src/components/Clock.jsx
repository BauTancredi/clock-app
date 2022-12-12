import React, { useRef } from "react";

import Quote from "./Quote";
import Hour from "./Hour";

export default function Clock() {
  const ref = useRef(null);
  const buttonRef = useRef(null);

  const toggle = () => {
    ref.current.classList.toggle("down");
    ref.current.classList.toggle("up");
    buttonRef.current.classList.toggle("rotate");
    buttonRef.current.classList.toggle("rotateBack");

    buttonRef.current.childNodes[0].innerHTML === "MORE"
      ? (buttonRef.current.childNodes[0].innerHTML = "LESS")
      : (buttonRef.current.childNodes[0].innerHTML = "MORE");
  };

  return (
    <div ref={ref} className="down">
      <div className="w-9/12 mx-auto py-10 h-screen bg-transparent flex flex-col justify-between text-white">
        <Quote />
        <Hour buttonRef={buttonRef} toggle={toggle} />
      </div>
      <div className="h-80 bg-gray-600 second">
        <div className="flex w-9/12 mx-auto pr-30">
          <div className="w-1/2 h-20">
            <h1 className="bg-slate-50">Hello</h1>
            <h1 className="bg-slate-50">Hello</h1>
          </div>
          <div className="w-1/2">
            <h1 className="bg-slate-50">Hello</h1>
            <h1 className="bg-slate-50">Hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
