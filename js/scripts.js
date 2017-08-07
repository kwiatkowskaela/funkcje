// scripts.js

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        alert("Nieprawidłowe dane");
        console.log("Nieprawidłowe dane");
        return;
    } else {

        alert('Pole trójkąta, ' + a * h / 2 + 'cm2');
        console.log('Pole trójkąta, ' + triangleArea);
        return a * h / 2;
    }
}

var suma = getTriangleArea(prompt("wpisz długość boku trójkąta"), prompt("wpisz wysokość trójkąta"));
console.log(suma);
