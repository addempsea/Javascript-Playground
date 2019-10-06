var cleanestCities = [ 'ibadan', 'kano', 'lagos', 'enugu', 'ilorin', 'abuja'];

var cityToCheck = prompt ('enter a city');

cityToCheck = cityToCheck.toLowerCase();

var matchFound = false;

  for (var i = 0; i < cleanestCities.length; i++) {

    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}

if (matchFound === false) {
    alert("It's not on the list");

}