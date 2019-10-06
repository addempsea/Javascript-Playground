var firstNames = ["Ademola", "Pelumi ", "Tejiri ", "Anita ", "Oge "];
var lastNames = [" Babatunde", " Amami", " Igboh", " Adigun"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
     fullNames.push(firstNames[i] + lastNames[j]);
        document.write (fullNames);
    }
}