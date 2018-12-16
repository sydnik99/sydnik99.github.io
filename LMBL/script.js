$(document).ready(function(){
	console.log("ready!");


$(".channel").mouseenter(function(){
	$(".tvscreen").removeClass().addClass("tvscreen");
	$(".tvscreen").addClass($(this).attr("data-name") );
});

$(".channel").mouseleave(function(){
	$(".tvscreen").removeClass().addClass("tvscreen");
});

});