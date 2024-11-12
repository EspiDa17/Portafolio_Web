const nameElementPart1 = document.querySelector(".part1");
const nameElementPart2 = document.querySelector(".part2");
const nameElementPart3 = document.querySelector(".part3");

const textPart1 = ".Daniel Espinal Gil  "; // Primera parte
const textPart2 = "{ Desarrollador Web Full Stack } "; // Segunda parte
const textPart3 = "/* Ingeniero Mecatrónico */"; // Tercera parte

let index1 = 0;
let index2 = 0;
let index3 = 0;
let isDeleting = false;

function typeEffect() {
    // Escribe la primera parte del texto
    if (!isDeleting && index1 < textPart1.length) {
        nameElementPart1.textContent += textPart1[index1];
        index1++;
        setTimeout(typeEffect, 150);
    } 
    // Escribe la segunda parte del texto
    else if (!isDeleting && index2 < textPart2.length) {
        nameElementPart2.textContent += textPart2[index2];
        index2++;
        setTimeout(typeEffect, 150);
    } 
    // Escribe la tercera parte del texto (cuando empieza la parte 1)
    else if (!isDeleting && index3 < textPart3.length) {
        nameElementPart3.textContent += textPart3[index3];
        index3++;
        setTimeout(typeEffect, 150);
    } 
    // Empieza a borrar después de escribir la tercera parte
    else if (isDeleting && index3 > 0) {
        nameElementPart3.textContent = textPart3.substring(0, index3 - 1);
        index3--;
        setTimeout(typeEffect, 50);
    } else if (isDeleting && index2 > 0) {
        nameElementPart2.textContent = textPart2.substring(0, index2 - 1);
        index2--;
        setTimeout(typeEffect, 50);
    } else if (isDeleting && index1 > 0) {
        nameElementPart1.textContent = textPart1.substring(0, index1 - 1);
        index1--;
        setTimeout(typeEffect, 50);
    } 
    // Pausa después de escribir todo y antes de borrar
    else if (!isDeleting && index1 === textPart1.length && index2 === textPart2.length && index3 === textPart3.length) {
        setTimeout(() => isDeleting = true, 2000); // Pausa de 2 segundos antes de borrar
        setTimeout(typeEffect, 2000);
    } 
    // Espera hasta que la parte 3 termine para borrar la parte 2
    else if (isDeleting && index2 === 0 && index3 === 0) {
        setTimeout(typeEffect, 500); // Pausa antes de reescribir
        isDeleting = false;
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);