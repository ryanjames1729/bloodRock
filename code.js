var raceStart = new Date("Dec 9, 2017 5:00:00").getTime();
var x = setInterval(function(){
  var now = new Date();
  var distance = now.getTime() - raceStart;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

  document.getElementById("timer").innerHTML = "Race Time: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("clock").innerHTML = "Current Time: " + now.getHours() + ":" + now.getMinutes();
}, 1000);
