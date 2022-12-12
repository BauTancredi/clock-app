import React from "react";

export default function Hour({ toggle, buttonRef }) {
  return (
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
  );
}
