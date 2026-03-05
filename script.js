window.inicializarMapasAmigoperro = function(containerId = 'ampMapasContainer') {
            
    const mapas = [
        {
            titulo: "Macul",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.9127898096312!2d-70.61670758637982!3d-33.48780782622395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1ac509eb4f1%3A0xcbb21535dc236e5f!2samigoperro%20peluquer%C3%ADa%20canina%20a%20domicilio!5e0!3m2!1ses-419!2scl!4v1772726347880!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            titulo: "Santiago Centro",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53253.90683564741!2d-70.6890432304688!3d-33.46573791783371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c50f48546175%3A0xe9300ab6735b8391!2speluquer%C3%ADa%20canina%20amigoperro!5e0!3m2!1ses-419!2scl!4v1772727378277!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            titulo: "Estación Central",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.760360208679!2d-70.70141010000002!3d-33.45554939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dd441e3fbf03%3A0x19210ec7d3c56bb8!2sPeluquer%C3%ADa%20Canina%20Razas%20Peque%C3%B1as%20-%20Santiago!5e0!3m2!1ses-419!2scl!4v1772727403122!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        }
    ];

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    mapas.forEach(mapa => {
        const col = document.createElement('div');
        col.className = 'amp-mapas-col';
        
        const titulo = document.createElement('div');
        titulo.className = 'amp-mapas-titulo';
        titulo.textContent = mapa.titulo;
        
        // Crear contenedor temporal para extraer el iframe
        const temp = document.createElement('div');
        temp.innerHTML = mapa.iframe;
        const iframe = temp.firstChild;
        
        // Modificar atributos del iframe
        iframe.className = 'amp-mapas-iframe';
        iframe.removeAttribute('width');
        iframe.removeAttribute('height');
        iframe.style = 'border:0;';
        
        col.appendChild(titulo);
        col.appendChild(iframe);
        container.appendChild(col);
    });
};
	
// script.js para AmigoPerro
(function() {
  console.log('AmigoPerro - landing page cargada');

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
    
    window.inicializarMapasAmigoperro();
  });
})();
