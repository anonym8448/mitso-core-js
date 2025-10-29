/**
 * Parses a rfc2822 string date representation into date value
 */
function parseDataFromRfc2822(value) {
  return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 */
function parseDataFromIso8601(value) {
  return new Date(value);
}

/**
 * Returns true if specified date is leap year and false otherwise
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  if (year % 400 !== 0) return false;
  return true;
}

/**
 * Returns the string representation of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 */
function timeSpanToString(startDate, endDate) {
  const diff = endDate - startDate;

  const milliseconds = diff % 1000;
  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor(diff / (1000 * 60 * 60));

  const pad = (num, size) => String(num).padStart(size, '0');

  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
}

/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 */
function angleBetweenClockHands(date) {
  const d = new Date(date);
  const hours = d.getUTCHours() % 12;
  const minutes = d.getUTCMinutes();

  // Hour hand: 30 degrees per hour + 0.5 degrees per minute
  const hourAngle = (hours * 30) + (minutes * 0.5);

  // Minute hand: 6 degrees per minute
  const minuteAngle = minutes * 6;

  // Difference between the two angles
  let angle = Math.abs(hourAngle - minuteAngle);

  // Get the smaller angle
  if (angle > 180) {
    angle = 360 - angle;
  }
  // Convert to radians
  return (angle * Math.PI) / 180;
}

/**
 * Write a function that will help you determine the date
 * if you know the number of the day in the year
 */
function getDay(day, isLeap) {
  const daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  let remainingDays = day;
  let monthIndex = 0;
  while (remainingDays > daysInMonth[monthIndex]) {
    remainingDays -= daysInMonth[monthIndex];
    monthIndex += 1;
  }
  return `${monthNames[monthIndex]}, ${remainingDays}`;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
  getDay,
};
