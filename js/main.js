'use strict';
$(document).ready(function() {

	// Subscribe & More
	
	var subBtn = document.getElementById("subscribe-button");
	var subCls = document.getElementById("subscribe-close");
	var subModal = document.getElementById("subscribe-modal");

	$(subBtn).on("click", function() {
		$(subModal).addClass("open");
		$(overlay).addClass("on");
	});

	$(subCls).on("click", function() {
		$(subModal).removeClass("open");
		$(overlay).removeClass("on");
	});

});