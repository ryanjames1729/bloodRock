var raceStart_alt = new Date("Dec 9, 2017 5:00:00");
console.log("begin...");
var hourStart = 5
var dateStart = 9
var raceStart = Date.UTC(2017, 11, dateStart, hourStart, 0, 0, 0);

var x = setInterval(function(){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var distance = utc - raceStart;
  if (distance/(1000*60*60*24) < 0 && distance/(1000*60*60*24) > -0.5){
    var days = 0;
  }
  else{
    if(distance < 0){
      var days = Math.abs(Math.ceil(distance / (1000 * 60 * 60 * 24)));
    }
    else{
      var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
    }
  }

  var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
  if (distance < 0){
    var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + 5;
    document.getElementById("timer").innerHTML = "Race Time: -" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  }
  else{
    var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) - 6;
    document.getElementById("timer").innerHTML = "Race Time: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  }
  if (now.getUTCHours() > 5){
    var now_hours = now.getUTCHours() - 6;
  }
  else {
    var now_hours = now.getUTCHours() + 18;
  }
  document.getElementById("clock").innerHTML = "Current Time: " + now_hours + ":" + digits(now.getUTCMinutes());
}, 1000);

function digits(time){
  if (time < 10){
    return "0" + time;
  }
  return time;
}

function AS(current, goal){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  console.log("utc: " + utc);
  console.log("start: " + raceStart);
  console.log("Elapsed: " + elapsed + "ms");
  var pace = Math.floor(elapsed/current*goal);
  console.log("Pace: " + pace + "ms");
  var hours = (Math.abs(Math.floor((pace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + hourStart) % 24;
  console.log(hours);
  var minutes = Math.abs(Math.floor((pace % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((pace % (1000 * 60)) / 1000));
  return hours + ":" + digits(minutes) + ":" + digits(seconds);
  //var now = new Date();
  //var elapsed = Math.floor(now.getTime() - raceStart_alt);
  //var as2 = Math.floor(elapsed/current*goal);
  //var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+raceStart_alt.getHours())%24;
  //var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60))+raceStart_alt.getMinutes();
  //var seconds = Math.floor((as2 % (1000 * 60)) / 1000)+raceStart_alt.getSeconds();
//return hours + ":" + digits(minutes) + ":" + digits(seconds);


}

function ASadj(current, goal){
  var now = new Date();
  //var elapsed = Math.floor(now.getTime() - raceStart_alt);
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  if (goal < 33){
    var as2 = Math.floor(elapsed/current*goal);
  }
  else if (goal < 67){
    var as2 = Math.floor(elapsed/current*goal*1.05);
  }
  else{
    var as2 = Math.floor(elapsed/current*goal*1.2);
  }
  var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+ hourStart) % 24;
  var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((as2 % (1000 * 60)) / 1000);
  return hours + ":" + digits(minutes) + ":" + digits(seconds);
}

function cabins(current){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  var pace = Math.floor(elapsed/current*50.9);
  var hours = (Math.abs(Math.floor((pace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + hourStart) % 24;
  var minutes = Math.abs(Math.floor((pace % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((pace % (1000 * 60)) / 1000));
  /**var now = new Date();
  var elapsed = Math.floor(now.getTime() - raceStart_alt);
  var as2 = Math.floor(elapsed/current*50.9);
  var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+raceStart_alt.getHours())%24;
  var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60))+raceStart_alt.getMinutes();
  **/
  if (hours > 0 && hours < 10){
    return true;
  }
  else if (hours == 12 && minutes < 30){
    return true;
  }
  else{
    return false;
  }
}

function terrace2(current){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  var pace = Math.floor(elapsed/current*79.5);
  var hours = (Math.abs(Math.floor((pace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + hourStart) % 24;
  var minutes = Math.abs(Math.floor((pace % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((pace % (1000 * 60)) / 1000));
  /**
  var now = new Date();
  var elapsed = Math.floor(now.getTime() - raceStart_alt);
  var as2 = Math.floor(elapsed/current*79.5);
  var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+raceStart_alt.getHours())%24;
  var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60))+raceStart_alt.getMinutes();
  **/
  if (hours > 9 && hours < 12){
    return true;
  }
  else if (hours == 9 && minutes > 0){
    return true;
  }
  else{
    return false;
  }
}

function highCrest(current){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  var pace = Math.floor(elapsed/current*87.3);
  var hours = (Math.abs(Math.floor((pace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + hourStart) % 24;
  var minutes = Math.abs(Math.floor((pace % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((pace % (1000 * 60)) / 1000));
  /**
  var now = new Date();
  var elapsed = Math.floor(now.getTime() - raceStart_alt);
  var as2 = Math.floor(elapsed/current*87.3);
  var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+raceStart_alt.getHours())%24;
  var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60))+raceStart_alt.getMinutes();
  **/
  if (hours >=12 && hours < 16){
    return true;
  }
  else if (hours == 11 && minutes > 30){
    return true;
  }
  else{
    return false;
  }
}

function peavine(current){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  var pace = Math.floor(elapsed/current*93.8);
  var hours = (Math.abs(Math.floor((pace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + hourStart) % 24;
  var minutes = Math.abs(Math.floor((pace % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((pace % (1000 * 60)) / 1000));
  /**
  var now = new Date();
  var elapsed = Math.floor(now.getTime() - raceStart_alt);
  var as2 = Math.floor(elapsed/current*93.8);
  var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+raceStart_alt.getHours())%24;
  var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60))+raceStart_alt.getMinutes();
  **/
  if (hours > 14 && hours < 18){
    return true;
  }
  else if (hours == 14 && minutes > 00){
    return true;
  }
  else{
    return false;
  }
}

function finish(current){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  var elapsed = utc - raceStart -21600000;
  var pace = Math.floor(elapsed/current*101.8);
  var hours = (Math.abs(Math.floor((pace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + hourStart) % 24;
  var minutes = Math.abs(Math.floor((pace % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((pace % (1000 * 60)) / 1000));
  /**
  var now = new Date();
  var elapsed = Math.floor(now.getTime() - raceStart_alt);
  var as2 = Math.floor(elapsed/current*101.8);
  var hours = (Math.floor((as2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+raceStart_alt.getHours())%24;
  var minutes = Math.floor((as2 % (1000 * 60 * 60)) / (1000 * 60))+raceStart_alt.getMinutes();
  **/
  if (hours > 16 && hours < 20){
    return true;
  }
  else if (hours == 16 && minutes > 00){
    return true;
  }
  else{
    return false;
  }
}

function AS_plan(mile){
  var loc = mile;
  if (loc == 3.2){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    console.log("AS 3.2")
    document.getElementById("as1").innerHTML = AS(loc, 3.2);
    console.log("AS 11.8")
    document.getElementById("as2").innerHTML = AS(loc, 11.8);
    document.getElementById("as2adj").innerHTML = ASadj(loc, 11.8);
    console.log("End")
    document.getElementById("as3").innerHTML = AS(loc, 16.0);
    document.getElementById("as3adj").innerHTML = ASadj(loc, 16.0);
    document.getElementById("as4").innerHTML = AS(loc, 23.5);
    document.getElementById("as4adj").innerHTML = ASadj(loc, 23.5);
    document.getElementById("as5").innerHTML = AS(loc, 28.6);
    document.getElementById("as5adj").innerHTML = ASadj(loc, 28.6);
    document.getElementById("as6").innerHTML = AS(loc, 36.4);
    document.getElementById("as6adj").innerHTML = ASadj(loc, 36.4);
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 11.8){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2").innerHTML = AS(loc, 11.8);
    document.getElementById("as2adj").innerHTML = ASadj(loc, 11.8);
    document.getElementById("as3").innerHTML = AS(loc, 16.0);
    document.getElementById("as3adj").innerHTML = ASadj(loc, 16.0);
    document.getElementById("as4").innerHTML = AS(loc, 23.5);
    document.getElementById("as4adj").innerHTML = ASadj(loc, 23.5);
    document.getElementById("as5").innerHTML = AS(loc, 28.6);
    document.getElementById("as5adj").innerHTML = ASadj(loc, 28.6);
    document.getElementById("as6").innerHTML = AS(loc, 36.4);
    document.getElementById("as6adj").innerHTML = ASadj(loc, 36.4);
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 16.0){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3").innerHTML = AS(loc, 16.0);
    document.getElementById("as3adj").innerHTML = ASadj(loc, 16.0);
    document.getElementById("as4").innerHTML = AS(loc, 23.5);
    document.getElementById("as4adj").innerHTML = ASadj(loc, 23.5);
    document.getElementById("as5").innerHTML = AS(loc, 28.6);
    document.getElementById("as5adj").innerHTML = ASadj(loc, 28.6);
    document.getElementById("as6").innerHTML = AS(loc, 36.4);
    document.getElementById("as6adj").innerHTML = ASadj(loc, 36.4);
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 23.5){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4").innerHTML = AS(loc, 23.5);
    document.getElementById("as4adj").innerHTML = ASadj(loc, 23.5);
    document.getElementById("as5").innerHTML = AS(loc, 28.6);
    document.getElementById("as5adj").innerHTML = ASadj(loc, 28.6);
    document.getElementById("as6").innerHTML = AS(loc, 36.4);
    document.getElementById("as6adj").innerHTML = ASadj(loc, 36.4);
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 28.6){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5").innerHTML = AS(loc, 28.6);
    document.getElementById("as5adj").innerHTML = ASadj(loc, 28.6);
    document.getElementById("as6").innerHTML = AS(loc, 36.4);
    document.getElementById("as6adj").innerHTML = ASadj(loc, 36.4);
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 36.4){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6").innerHTML = AS(loc, 36.4);
    document.getElementById("as6adj").innerHTML = ASadj(loc, 36.4);
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 42.9){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7").innerHTML = AS(loc, 42.9);
    document.getElementById("as7adj").innerHTML = ASadj(loc, 42.9);
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 50.9){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8").innerHTML = AS(loc, 50.9);
    document.getElementById("as8adj").innerHTML = ASadj(loc, 50.9);
    if(cabins(loc)){
      document.getElementById("as8").style.setProperty("color", "red");
      document.getElementById("as8adj").style.setProperty("color", "red");
    }
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 54.1){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9").innerHTML = AS(loc, 54.1);
    document.getElementById("as9adj").innerHTML = ASadj(loc, 54.1);
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 62.7){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10").innerHTML = AS(loc, 62.7);
    document.getElementById("as10adj").innerHTML = ASadj(loc, 62.7);
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 66.9){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11").innerHTML = AS(loc, 66.9);
    document.getElementById("as11adj").innerHTML = ASadj(loc, 66.9);
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 74.4){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as12n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as12").innerHTML = AS(loc, 74.4);
    document.getElementById("as12adj").innerHTML = ASadj(loc, 74.4);
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 79.5){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as12n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as13n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as13").innerHTML = AS(loc, 79.5);
    document.getElementById("as13adj").innerHTML = ASadj(loc, 79.5);
    if(terrace2(loc)){
      document.getElementById("as13").style.setProperty("color", "red");
      document.getElementById("as13adj").style.setProperty("color", "red");
    }
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 87.3){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as12n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as13n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as14n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as14").innerHTML = AS(loc, 87.3);
    document.getElementById("as14adj").innerHTML = ASadj(loc, 87.3);
    if(highCrest(loc)){
      document.getElementById("as14").style.setProperty("color", "red");
      document.getElementById("as14adj").style.setProperty("color", "red");
    }
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 93.8){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as12n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as13n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as14n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as15n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as15").innerHTML = AS(loc, 93.8);
    document.getElementById("as15adj").innerHTML = ASadj(loc, 93.8);
    if(peavine(loc)){
      document.getElementById("as15").style.setProperty("color", "red");
      document.getElementById("as15adj").style.setProperty("color", "red");
    }
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
  else if (loc == 101.8){
    document.getElementById("as1n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as2n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as3n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as4n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as5n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as6n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as7n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as8n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as9n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as10n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as11n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as12n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as13n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as14n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as15n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as16n").style.setProperty("text-decoration", "line-through");
    document.getElementById("as16").innerHTML = AS(loc, 101.8);
    document.getElementById("as16adj").innerHTML = ASadj(loc, 101.8);
    if(finish(loc)){
      document.getElementById("as16").style.setProperty("color", "red");
      document.getElementById("as16adj").style.setProperty("color", "red");
    }
  }
}
