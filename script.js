// script.js para AmigoPerro
(function() {
  console.log('🐾 AmigoPerro - landing page cargada');

  document.addEventListener('DOMContentLoaded', function() {
    // Registrar clicks en WhatsApp
    const wspButtons = document.querySelectorAll('.btn-wsp');
    wspButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        console.log('✓ Click en WhatsApp +569 4752 1363');
      });
    });

    // Contar fotos
    const fotos = document.querySelectorAll('.foto');
    console.log(`📸 Galería con ${fotos.length} fotos principales`);

    // Actualizar año en footer
    const footer = document.querySelector('.footer p');
    if (footer) {
      const currentYear = new Date().getFullYear();
      footer.innerHTML = footer.innerHTML.replace('©', `© ${currentYear}`);
    }
  });
})();