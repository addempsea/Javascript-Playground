//     function demo (x, y) {
//         let kd = x + " is greater than " +  y;
//         return kd
//     }

// let ur = demo(2,5);

function reverseString(str) { 
    return str.split("").reverse().join("");
}

var userInput = prompt("enter a word");
userInput = userInput.toLowerCase();

if (userInput == reverseString (userInput)) {
    alert ("word is a palindrome");
}
else {alert ('word is not a palindrome');
}