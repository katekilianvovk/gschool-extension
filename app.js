var hoursLeftToday = document.getElementById("hoursLeft"),
    daysLeftMonth = document.getElementById("daysLeftThisMonth"),
    gSchoolLeft = document.getElementById("gSchoolDaysLeft"),
    DAY_IN_MS = 86400000,
    HOUR_IN_MS = 3600000;

setInterval(function updateTab(){
  var newDate = new Date();
  hoursLeftToday.innerHTML = hoursLeft(newDate);
  daysLeftMonth.innerHTML = daysLeft(newDate);
  gSchoolLeft.innerHTML = gSchoolDaysLeft(newDate);
}, 150);

function hoursLeft(newDate) {
  var timeLeftToday = (new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 24, 0)).getTime() - newDate.getTime();
  return (timeLeftToday/HOUR_IN_MS).toString().substring(0, 7);
}

function daysLeft(newDate) {
  var timeLeftMonth = (new Date(newDate.getFullYear(), newDate.getMonth() + 1, 1)) - newDate.getTime();
  return (timeLeftMonth/DAY_IN_MS).toString().substring(0, 8);
}

function gSchoolDaysLeft(newDate) {
  var timeLeftgSchool = (new Date(2015, 6, 3).getTime()) - newDate.getTime();
  return (timeLeftgSchool/DAY_IN_MS).toString().substring(0, 8);
}
