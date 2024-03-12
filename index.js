'use strict';

document.getElementById('btn-copy').addEventListener('click', function() {
    var emailText = document.getElementById('input-email').innerText;
    var tempInput = document.createElement('input').value = emailText;

    document.body.appendChild(tempInput);
    tempInput.ariaSelected();
    document.execCommand('copy');
    document.body.removeChild('tempInput');
    alert('Copied email: ' + emailText);
});


