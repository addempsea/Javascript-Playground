var temp = prompt ("please enter your temperature");
var tempCel = (temp - 33) / 18 ;
var tempInCel = tempCel.toPrecision(4);
alert (tempInCel + " °C");