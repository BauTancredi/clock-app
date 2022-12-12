export default function getDayTime(time) {
  if (time >= "06:00" && time <= "12:00") return "Morning";
  if (time >= "12:00" && time <= "18:00") return "Afternoon";
  if (time >= "18:00" && time <= "00:00") return "Evening";
  if (time >= "00:00" && time <= "06:00") return "Night";
}
