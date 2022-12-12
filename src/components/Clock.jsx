import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import { getDayTime, getDayOfTheWeek, getDayOfTheYear } from "../utils/timeHelpers";
import { timeFetcher as fetcher } from "../services";

import Quote from "./Quote";
import Hour from "./Hour";

export default function Clock() {
  const ref = useRef(null);
  const buttonRef = useRef(null);

  const { data } = useQuery(["hour"], fetcher, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: 60000,
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

  if (!data) {
    return null;
  }

  const hourProps = {
    time: data.time_24.slice(0, 5),
    city: data.geo.city,
    district: data.geo.district,
    country: data.geo.country_code3,
    dayTime: getDayTime(data.date_time_txt),
    timezone: data.timezone,
    week: data.week,
    dayOfTheYear: getDayOfTheYear(data.date_time_txt),
    dayOfTheWeek: getDayOfTheWeek(data.date_time_txt),
  };

  return (
    <div ref={ref} className="down">
      <div className="w-9/12 mx-auto py-10 h-screen bg-transparent flex flex-col justify-between text-white">
        <Quote />
        <Hour buttonRef={buttonRef} hourProps={hourProps} toggle={toggle} />
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
