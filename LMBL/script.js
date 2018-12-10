$(document).ready(function(){
	console.log("ready!");

$(".channel").hover(function(){
	$(".tvscreen").removeClass().addClass("tvscreen");
	$(".tvscreen").addClass($(this).attr("data-name") );
});

});