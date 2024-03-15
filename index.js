'use strict';

document.getElementById('copy-email').addEventListener('click', function() {
    var emailText = document.querySelector('.contact-info ul li:last-child').textContent.trim();
    navigator.clipboard.writeText(emailText).then(function() {
        Swal.fire({
          title: "Good job!",
          text: "The email has been copied! " + emailText,
          icon: "success"
        });
    }).catch(function(err) {
        console.error('Error copying email: ', err);
    });
});


function scrollToElement(elementSelector) {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const link1 = document.getElementById('link1');
    const link3 = document.getElementById('link3');
    const link4 = document.getElementById('link4');

    link1.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        scrollToElement('.container'); // Adjust the selector to your desired section
    });

    link3.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        scrollToElement('.skills'); // Adjust the selector to your desired section
    });

    link4.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        scrollToElement('.contact'); // Adjust the selector to your desired section
    });
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

