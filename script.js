function launchConfetti() {
    confetti({
      particleCount: 150, // Cantidad de confeti
      spread: 70, // Ángulo de dispersión
      origin: { y: 0.6 }, // Punto de inicio
      colors: ['#ff0000', '#ff69b4', '#ff1493', '#ff4500'], // Tonos románticos ❤️
    });
  }

  // Espera un poco y lanza el confeti
  window.onload = function () {
    setTimeout(launchConfetti, 500); // Se activa 0.5s después de cargar
  };

$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
