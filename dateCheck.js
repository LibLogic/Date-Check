function dateCheck(month, year, day) {
  let oldDate = new Date(year, month, day);
  oldDate = oldDate.getTime();
  let newDate = Date.now();
  let passedTimeMil = newDate - oldDate;

  let calc = (passedTimeMil / 1000 /60 / 60 / 24 /365).toFixed(2);
  return calc;
}

console.log(dateCheck(2, 1960, 13));