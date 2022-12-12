import React, { useRef } from "react";

function App() {
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
        <div className="flex">
          <blockquote className="max-w-lg">
            &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni ea minima
            fuga? Est neque placeat laboriosam modi,&rdquo; &mdash;
            <footer className="pt-4">
              <strong>Elbert Hubbard</strong>
            </footer>
          </blockquote>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="lg:flex lg:justify-between lg:items-end">
          <div>
            <p className="flex items-center tracking-widest">
              <span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
              </span>
              &nbsp; GOOD EVENING <span className="hidden md:block">, IT&apos;S CURRENTLY</span>
            </p>
            <p className="text-8xl md:text-9xl font-bold my-4">01:10</p>
            <p className="text-xl tracking-widest mb-16 lg:mb-0">
              <strong>IN LONDON, UK</strong>
            </p>
          </div>
          <button
            ref={buttonRef}
            className="flex justify-between rotate h-max bg-slate-50 text-gray-900 px-1 py-2 pl-3 w-28 rounded-full"
            onClick={toggle}
          >
            <span className="tracking-widest">MORE</span>
            <svg
              className="w-6 h-6 bg-gray-600 rounded-full p-1 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
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

export default App;
