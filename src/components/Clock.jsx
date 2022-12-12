import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import getDayTime from "../utils/timeHelpers";

import Quote from "./Quote";
import Hour from "./Hour";

const fetcher = async () => {
  const response = await fetch(
    `https://api.ipgeolocation.io/timezone?apiKey=8ee02cd846b84e06848a0cb19156fe16`,
  );
  const data = await response.json();

  return data;
};

export default function Clock() {
  const ref = useRef(null);
  const buttonRef = useRef(null);

  const { data, isFetching, refetch, error } = useQuery(["hour"], fetcher, {
    refetchOnWindowFocus: false,
  });

  const toggle = () => {
    ref.current.classList.toggle("down");
    ref.current.classList.toggle("up");
    buttonRef.current.classList.toggle("rotate");
    buttonRef.current.classList.toggle("rotateBack");

    buttonRef.current.childNodes[0].innerHTML === "MORE"
      ? (buttonRef.current.childNodes[0].innerHTML = "LESS")
      : (buttonRef.current.childNodes[0].innerHTML = "MORE");
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const time = data.time_24.slice(0, 5);
  // const timeInPM = data.time_12.slice(0, 5) + data.time_12.slice(8, 11);
  const city = data.geo.city;
  const district = data.geo.district;
  const country = data.geo.country_code3;
  const dayTime = getDayTime(time);

  console.log(time, timeInPM, city, district, country, dayTime);
  console.log(data);

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
