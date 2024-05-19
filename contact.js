(function() {
    emailjs.init({
        publicKey: "E3WqdbELId9Ja8gPj",
      });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_jm9lc96', 'template_4ew44cp', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            alert('Falha ao enviar a mensagem: ' + JSON.stringify(error));
        });
});
