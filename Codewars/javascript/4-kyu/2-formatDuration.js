// Codewars 2
// Title :  human readable duration format
// Instructions :   Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// Challange Url :  https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// Level : 4kyu

// Method : 1
export const formatDuration = (seconds) => {
  if (seconds === 0) return "now";
  if (seconds < 60) return `${seconds} second${seconds > 1 ? "s" : ""}`;
  const results = [];
  const durations = ["year", "day", "hour", "minute", "second"];
  const times = [
    seconds / 3600 / 24 / 365,
    (seconds / 3600 / 24) % 365,
    (seconds / 3600) % 24,
    (seconds % 3600) / 60,
    seconds % 60,
  ];
  for (let i = 0; i < durations.length; i++) {
    const duration = durations[i];
    const time = Math.floor(times[i]);
    if (time !== 0) {
      results.push(`${time} ${duration}${time > 1 ? "s" : ""}`);
    }
  }
  if (results.length === 1) return results[0];
  const lastItem = results.pop();
  return `${results.join(", ")} and ${lastItem}`;
};

// Method 2

// Other Users Method
// function formatDuration(seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//     res = [];

//   if (seconds === 0) return "now";

//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds / time[key]);
//       res.push((val += val > 1 ? " " + key + "s" : " " + key));
//       seconds = seconds % time[key];
//     }
//   }

//   return res.length > 1
//     ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
//     : res[0];
// }
