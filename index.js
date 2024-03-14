'use strict';

function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there elements matvhing the selector and if the requested instance exists
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById('link1');
// const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

link1.addEventListener('click', () => {
    scrollToElement('.content');
});

// link2.addEventListener('click', () => {
//     scrollToElement('.projects');
// });

link3.addEventListener('click', () => {
    scrollToElement('.skills');
});

link4.addEventListener('click', () => {
    scrollToElement('.contact');
});

// Send Email Modal
// Obtener elementos del DOM
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];

// Función para abrir el modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar el modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

