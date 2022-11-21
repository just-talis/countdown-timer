import dayjs from "dayjs";

export function getRemainingTimeUtils(timestampMs) {
const timestampDayjs = dayjs(timestampMs);
const nowDayjs = dayjs();

  return {
    days: "31",
    hours: "12",
    minutes: "15",
    seconds: "12",
  };
}
