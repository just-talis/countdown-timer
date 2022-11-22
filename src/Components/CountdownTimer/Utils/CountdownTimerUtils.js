import dayjs from "dayjs";

export function getRemainingTimeUtils(timestampMs) {
const timestampDayjs = dayjs(timestampMs);
const nowDayjs = dayjs();

  return {
    days: getRemainingDays(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs)
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padZeros(seconds, 2); 
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padZeros(minutes, 2);
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padZeros(hours, 2);
}

function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function padZeros(number, minLength) {
    const numString = number.toString();
    if(numString.length >= minLength) return numString;
    return "0".repeat(minLength - numString.length) + numString
}