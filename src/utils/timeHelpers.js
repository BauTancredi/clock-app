import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

export function getDayTime(time) {
  const now = new Date(time);
  const hours = now.getHours();

  if (hours >= 6 && hours < 12) return "morning";
  if (hours >= 12 && hours < 18) return "afternoon";
  if (hours >= 18 && hours < 24) return "evening";
  if (hours >= 0 && hours < 6) return "night";
}

export function getDayOfTheYear(time) {
  dayjs.extend(dayOfYear);

  return dayjs(time).dayOfYear();
}

export function getDayOfTheWeek(time) {
  return dayjs(time).day();
}
