const btn = document.getElementById('button1An');
let formulario = document.getElementById('formAn');

 formulario.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando denuncia...';

   const serviceID = 'service_rp0te36';
   const templateID = 'template_61sod7y';
   
   emailjs.sendForm(serviceID, templateID, this).then(() => {
      btn.value = 'Enviar denuncia';
      Swal.fire({
        title: "Denuncia enviada con éxito",
        icon: "success",
        confirmButtonText: "Aceptar"
      });
    }, (err) => {
      btn.value = 'Enviar denuncia';
      Swal.fire({
        title: "Error al enviar la denuncia",
        icon: "warning",
        text: "Error en: " + JSON.stringify(err),
        confirmButtonText: "Aceptar"
      });
    });

    formulario.reset();
});