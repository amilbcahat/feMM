import moment from "moment";
export const dateHandler = (date) => {
  let now = moment();
  let momentDate = moment(date);
  let time = momentDate.fromNow(true);
  //6 months
  let dateByHourAndMin = momentDate.format("HH:mm");
  const getDay = () => {
    let days = time.split(" ")[0];
    if (Number(days) < 8) {
      //Shows day name
      //subtract is moment function
      //Get Now date and then subtract with 6 days ago for eg , then format it to show the name of the day
      return now.subtract(Number(days), "days").format("dddd");
    } else {
      return momentDate.format("DD/MM/YYYY");
    }
  };

  if (time === "a few seconds") {
    return "Now";
  }

  if (time.search("minutes") !== -1) {
    let mins = time.split(" ")[0];
    if (mins === "a") {
      return "1 min";
    } else {
      return `${mins} min`;
    }
  }
  if (time.search("hours") !== -1) {
    return dateByHourAndMin;
  }

  if (time === "a day") {
    return "Yesterday";
  }
  if (time.search("days") !== -1) {
    return getDay();
  }
  return time;
};
