// scripts.js

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        alert("Nieprawidłowe dane");
        console.log("Nieprawidłowe dane");
        return;
    } else {
        return a * h / 2;
        alert('Pole trójkąta, ' + a * h / 2 + 'cm2');
        console.log('Pole trójkąta, ' + triangleArea);
    }
}

var suma = getTriangleArea(prompt("wpisz długość boku trójkąta"), prompt("wpisz wysokość trójkąta"));
console.log(suma);


var triangleArea = getTriangleArea prompt(a, h);
console.log('Pole trójkąta, ' + triangleArea);
