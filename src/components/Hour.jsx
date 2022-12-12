import React from "react";

import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function Hour(props) {
  const {
    toggle,
    buttonRef,
    hourProps: { time, city, country, dayTime },
  } = props;

  const renderIcon = () => {
    if (dayTime === "morning" || dayTime === "afternoon") return <SunIcon />;
    if (dayTime === "evening" || dayTime === "night") return <MoonIcon />;
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-end">
      <div>
        <p className="flex items-center tracking-widest">
          <span>{renderIcon()}</span>
          &nbsp; GOOD {dayTime.toUpperCase()}
          <span className="hidden md:block">, IT&apos;S CURRENTLY</span>
        </p>
        <p className="text-8 xl md:text-9xl font-bold my-4">{time}</p>
        <p className="text-xl tracking-widest mb-16 lg:mb-0">
          <strong>
            IN {city.toUpperCase()}, {country.toUpperCase()}
          </strong>
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
