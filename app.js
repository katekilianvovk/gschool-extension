var year = 31558464000,
    day = 86400000,
    hour = 3600000,

    hoursLeftToday = document.getElementById("hoursLeft"),
    daysLeftMonth = document.getElementById("daysLeftThisMonth"),
    gSchoolLeft = document.getElementById("gSchoolDaysLeft");

setInterval(function updateTab(){
  var newDate = new Date();
  hoursLeftToday.innerHTML = hoursLeft(newDate);
  daysLeftMonth.innerHTML = daysLeft(newDate);
  gSchoolLeft.innerHTML = gSchoolDaysLeft(newDate);
}, 150);

function hoursLeft(newDate) {
  var timeLeftToday = (new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 24, 0)).getTime() - newDate.getTime();
  return timeLeftString = (timeLeftToday / hour).toString().substring(0, 7);
}

function daysLeft(newDate) {
  var timeLeftThisMonth = (new Date(newDate.getFullYear(), newDate.getMonth() + 1, 1)) - newDate.getTime();
  return (timeLeftThisMonth / day).toString().substring(0, 8);
}

function gSchoolDaysLeft(newDate) {
  var timeLeft = (new Date(2015, 6, 3).getTime()) - newDate.getTime();
  return (timeLeft / day).toString().substring(0, 8);
}
