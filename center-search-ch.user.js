// ==UserScript==
// @name Center search.ch website
// @description 
// @author Nicolas Jeker
// @version 1.0.0
// @date 2015-04-04
// @grant none
// @include http://*.search.ch/*
// @run-at document-end
// @license MIT License
// ==/UserScript==

(function () {
	$(".sl-cards-container,.sl-nav-container,.sl-footer").css("margin","0px auto");
	$("#sl-tribune-big").hide();
})();