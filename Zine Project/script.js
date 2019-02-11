$(document).ready(function(){
console.log("hello")
$(document).scroll(function(){

	var pctDone = $(document).scrollTop() / ( $(document).height() - $(window).height() );

	var newHt = (pctDone * ($(window).height() - 195)) + 65 + "px";

	$(".scroll").css({"top":$(document).scrollTop(), "height":newHt});
});

}); 