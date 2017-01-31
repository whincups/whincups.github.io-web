function getQueryStringParams(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split("&");

	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split("=");
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

$(document).ready(function () {
	$(".fancybox").fancybox();
});

$(window).on("load", function () {
	var msnry = new Masonry( ".grid", {
		itemSelector: ".grid-item",
		fitWidth: true
	});

	if (getQueryStringParams('submit') === "success") {
		$(".success").css("display", "block");
	}
});

$('#nav').onePageNav({
    begin: function() {
        //Hack so you can click other menu items after the initial click
        $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
    },
    end: function() {
        $('#device-dummy').remove();
    }
});